# planetfresh.app

## User Stories

Every week Dylan the chef receives a menu in his email. Dylan then buys the groceries with his Bitpay VISA debit card he pre-loaded with Bitcoin Cash.

Dylan comes to The Marcy and cooks the meals. After cooking Dylan sums the total for groceries. The frocery total is added to Dylan's fee and a bill is sent to Steven at the marcy.

Steven clicks the bill and it opens his Bitcoin Wallet. Steven sends Bitcoin Cash and a green "paid" check mark. Dylan receives a message saying he was paid for his visit. Dylan checks the status of his payment for that visit and is pleased to see it is paid. He opens his Bitcoin.com waller and loads enough funds back on to his Bitpay VISA catd to cover the cost of the groceries. Dylan profits.

Steven's virtual assistant gathers PDFs of all the menus, and one by one uploads each menu.

## Commands

### Admin

- addmenu <image url>

### Chef

- createappointment <chef_id> <start_date>
- addgroceriesreceipt <appointment_id> <total> <description> [image_url]
- collectpayment <appointment_id> <email> [currency]

## Queries

- listappointments <chef_id>
- addgroceriesreceipt <chef_id>
- listmenus
- checkpaymentstatus
