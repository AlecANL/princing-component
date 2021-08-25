const $inputCheck = document.getElementById('toggle-check');
const $customCheck = document.getElementById('custom-check');
const $basicPricing = document.getElementById('basic-pricing');
const $professionalPricing = document.getElementById('professional-pricing');
const $masterPricing = document.getElementById('master-pricing');

const tablePricing = {
  monthly: {
    basic: 19.99,
    professional: 24.99,
    master: 39.99,
  },
  annually: {
    basic: 199.99,
    professional: 249.99,
    master: 399.99,
  },
};

function renderPricing(typePricing = {}) {
  $basicPricing.innerText = typePricing.basic;
  $professionalPricing.innerText = typePricing.professional;
  $masterPricing.innerText = typePricing.master;
}

function togglePricing(isChecked = false) {
  if (!isChecked) {
    renderPricing(tablePricing.monthly);
    return;
  }
  renderPricing(tablePricing.annually);
  return;
}

$inputCheck.addEventListener('change', function () {
  togglePricing(this.checked);
});

togglePricing();
