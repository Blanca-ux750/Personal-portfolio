'use strict';
// Mobile navigation uses aria-expanded so its state is available to assistive tools.
const navigationToggle = document.querySelector('.menu-toggle');
const mainNavigation = document.querySelector('#navigation');
navigationToggle?.addEventListener('click', () => {
  const isExpanded = navigationToggle.getAttribute('aria-expanded') === 'true';
  navigationToggle.setAttribute('aria-expanded', String(!isExpanded));
  mainNavigation.classList.toggle('is-open', !isExpanded);
});
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && mainNavigation?.classList.contains('is-open')) {
    mainNavigation.classList.remove('is-open');
    navigationToggle.setAttribute('aria-expanded', 'false');
    navigationToggle.focus();
  }
});
const contactForm = document.querySelector('#contact-form');
// The assignment requests capture and redirect, not delivery to an email server.
// sessionStorage keeps the demo data in this browser tab; never put personal data in the URL.
contactForm?.addEventListener('submit', (event) => {
  event.preventDefault();
  const contactData = Object.fromEntries(new FormData(contactForm).entries());
  for (const fieldName of ['firstName', 'lastName', 'email', 'message']) {
    const field = contactForm.elements.namedItem(fieldName);
    const value = String(contactData[fieldName] || '').trim();
    field.setCustomValidity(value ? '' : 'Please enter a value, not only spaces.');
    contactData[fieldName] = value;
  }
  if (!contactForm.reportValidity()) return;
  try {
    sessionStorage.setItem('portfolioContactMessage', JSON.stringify(contactData));
    window.location.assign('index.html?message=captured');
  } catch {
    const errorPanel = document.querySelector('#form-error');
    errorPanel.textContent = 'Your browser could not capture the demo message. Enable session storage and try again.';
    errorPanel.hidden = false;
  }
});
contactForm?.addEventListener('input', (event) => {
  if ('setCustomValidity' in event.target) event.target.setCustomValidity('');
});
// Use textContent for visitor input, avoiding HTML injection in the confirmation.
const confirmationPanel = document.querySelector('#form-confirmation');
if (confirmationPanel && new URLSearchParams(window.location.search).get('message') === 'captured') {
  try {
    const savedMessage = JSON.parse(sessionStorage.getItem('portfolioContactMessage') || 'null');
    if (savedMessage && typeof savedMessage.firstName === 'string') {
      confirmationPanel.textContent = `Thank you, ${savedMessage.firstName}. Your demo message was captured and you are back on Home. No email was sent.`;
      confirmationPanel.hidden = false;
      sessionStorage.removeItem('portfolioContactMessage');
    }
  } catch {
    // Corrupted or blocked browser storage should not interrupt normal page navigation.
  }
  window.history.replaceState(null, '', 'index.html');
}
