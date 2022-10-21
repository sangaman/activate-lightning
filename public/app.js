async function getInvoice() {
  const amount = document.getElementById('amount').value;

  const response = await fetch("/invoice", {
    method: 'POST', 
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      amount,
    }),
  });

  response.json().then(data => {
    document.getElementById('invoice').value = data.invoice;
  });
}

async function payInvoice() {
  const invoice = document.getElementById('pay').value;

  const response = await fetch("/pay", {
    method: 'POST', 
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      invoice,
    }),
  });

  response.json().then(data => {
    document.getElementById('pay').value = '';
  });
}

async function getBalance() {
  const response = await fetch("/balance", {
    method: 'GET', 
    headers: {
      'Accept': 'application/json',
    },
  });

  response.json().then(data => {
    document.getElementById('balance').textContent = data.balance;
  });
}


getBalance();
