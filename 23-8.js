function ticketPrice(ticketquentity) {
    const first100Rate = 100;
    const second100Rate = 90;
    const restTicketRate = 70;
    if (ticketquentity <= 100) {
        const price = ticketquentity * 100;
        return price;
    }
    else if(ticketquentity <= 200){
        const first100Price = 100 * first100Rate;
        const restTicketquentity = ticketquentity - 100;
        const restTicketPrice = second100Rate * restTicketquentity;
        const totalPrice = first100Price + restTicketPrice;
        return totalPrice;
    }
    else{
        const first100Price = 100 * first100Rate;
        const second100Price = 100 * second100Rate;
        const restTickets = ticketquentity - 200;
        const restTicketPrice = restTickets * restTicketRate;
        const totalprice = first100Price + second100Price + restTicketPrice;
        return totalprice;
    }
}

var totalCost = ticketPrice(120);
console.log(totalCost);