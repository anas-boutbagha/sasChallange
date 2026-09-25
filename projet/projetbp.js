const p = require("prompt-sync")()

const trips = [
    {
        id: 1,
        departure: "Safi",
        destination: "Youssoufia",
        departureTime: "07:30",
        arrivalTime: "08:30",
        price: 25,
        availableSeats: 50
    },
    {
        id: 2,
        departure: "Safi",
        destination: "Marrakech",
        departureTime: "08:00",
        arrivalTime: "10:30",
        price: 90,
        availableSeats: 50
    },
    {
        id: 3,
        departure: "Safi",
        destination: "Casablanca",
        departureTime: "09:00",
        arrivalTime: "13:00",
        price: 140,
        availableSeats: 50
    },
    {
        id: 4,
        departure: "Youssoufia",
        destination: "Marrakech",
        departureTime: "09:15",
        arrivalTime: "11:00",
        price: 65,
        availableSeats: 50
    },
    {
        id: 5,
        departure: "Youssoufia",
        destination: "Casablanca",
        departureTime: "10:00",
        arrivalTime: "13:30",
        price: 110,
        availableSeats: 50
    },
    {
        id: 6,
        departure: "Marrakech",
        destination: "Casablanca",
        departureTime: "11:30",
        arrivalTime: "14:30",
        price: 120,
        availableSeats: 50
    },
    {
        id: 7,
        departure: "Marrakech",
        destination: "Rabat",
        departureTime: "12:00",
        arrivalTime: "16:00",
        price: 150,
        availableSeats: 50
    },
    {
        id: 8,
        departure: "Casablanca",
        destination: "Rabat",
        departureTime: "14:00",
        arrivalTime: "15:15",
        price: 40,
        availableSeats: 50
    },
    {
        id: 9,
        departure: "Casablanca",
        destination: "Kenitra",
        departureTime: "15:00",
        arrivalTime: "16:45",
        price: 55,
        availableSeats: 50
    },
    {
        id: 10,
        departure: "Rabat",
        destination: "Kenitra",
        departureTime: "16:00",
        arrivalTime: "16:45",
        price: 30,
        availableSeats: 50
    },
    {
        id: 11,
        departure: "Rabat",
        destination: "Fes",
        departureTime: "17:00",
        arrivalTime: "19:30",
        price: 95,
        availableSeats: 50
    },
    {
        id: 12,
        departure: "Kenitra",
        destination: "Fes",
        departureTime: "17:30",
        arrivalTime: "20:00",
        price: 85,
        availableSeats: 50
    },
    {
        id: 13,
        departure: "Fes",
        destination: "Meknes",
        departureTime: "08:30",
        arrivalTime: "09:20",
        price: 35,
        availableSeats: 50
    },
    {
        id: 14,
        departure: "Fes",
        destination: "Oujda",
        departureTime: "10:00",
        arrivalTime: "13:30",
        price: 130,
        availableSeats: 50
    },
    {
        id: 15,
        departure: "Meknes",
        destination: "Rabat",
        departureTime: "11:00",
        arrivalTime: "13:30",
        price: 80,
        availableSeats: 50
    },
    {
        id: 16,
        departure: "Meknes",
        destination: "Casablanca",
        departureTime: "12:00",
        arrivalTime: "15:00",
        price: 105,
        availableSeats: 50
    },
    {
        id: 17,
        departure: "Casablanca",
        destination: "El Jadida",
        departureTime: "16:30",
        arrivalTime: "18:00",
        price: 50,
        availableSeats: 50
    },
    {
        id: 18,
        departure: "El Jadida",
        destination: "Safi",
        departureTime: "18:30",
        arrivalTime: "20:30",
        price: 60,
        availableSeats: 50
    },
    {
        id: 19,
        departure: "Marrakech",
        destination: "Agadir",
        departureTime: "15:00",
        arrivalTime: "18:30",
        price: 100,
        availableSeats: 50
    },
    {
        id: 20,
        departure: "Agadir",
        destination: "Safi",
        departureTime: "19:00",
        arrivalTime: "22:00",
        price: 95,
        availableSeats: 50
    }
];
let a
const tickets = [];
let l = 0
let L = 0
function findavalibility(x , y, tab){
    let cnt=0
    let indice=0
     for (let i = 0 ; i < 20 ; i++){
            if(tab[i]?.id=x && tab[i].availableSeats > 0){
                cnt++
            }
            else if(tab[i].availableSeats<=0){
                console.log("Train complet.");
                
            }

        }
        if(cnt==0){console.log("Trajet introuvable")}
        else if (cnt==1){
            tickets.push({id: l, passengerName: y, tripId: x, seatNumber: L, price:tab[i]?.price,  })
        
        l++
        L++
         console.table(tickets[l])
         tab[x]?.availableSeats = tab[x]?.availableSeats - 1
        }
}
function annuleuneticket(tab_des_tiket,tab_des_traget, x){
    if(tab_des_tiket.length!=0)
{for (let i = 0 ; i < tab_des_tiket.length-1 ; i++){
            if(tab_des_tiket[i]?.id=x ){
                tab_des_tiket.splice(i,i+1)
                tab_des_traget[(tab_des_tiket[i]?.tripId)].availableSeats--
                console.log("Ticket annulé avec succès.");
            }
}}
else if(tab_des_tiket.length==0){console.log("Ticket introuvable.");
}
}




do{
console.log(" ")
console.log("============================");
console.log("      RAILWAY MANAGER       ");
console.log("============================");
console.log(" 1. Afficher les trajets");
console.log(" 2. Acheter un ticket")
console.log(" 3. Afficher les tickets")
console.log(" 4. Annuler un ticket")
console.log(" 5. Rechercher un ticket")
console.log(" 6. Filtrer les trajets")
console.log(" 7. Trier les trajets")
console.log(" 0. Quitter")
console.log(" ")

a = Number(p("choose an option please: "))
switch (a) {
    case 1:{
        console.table(trips);
        p("continue...");
        console.clear();
        break;
    } 
    case 2:{
        name = Number(p("what's your name please: "))
        id = Number(p("choose an id option please: "))
        findavalibility(id , name, trips)
        p("continue...");
        console.clear();
        break;
    } 
    case 3:{
        console.log(" ");
        if(tickets!= 0){
        console.table(tickets);
        console.log(" ");
        p("continue...");
        console.clear();
        break;}
        else if(tickets== 0){
            console.log("Aucun ticket enregistré")
        }
    } 
    case 4:{
    let t_id = Number(p(" Identifiant du ticket please: "))
    annuleuneticket(tickets,trips, t_id)
    }
    case 5:{
    let t_id = Number(p(" Identifiant du ticket please: "))
    annuleuneticket(tickets,trips, t_id)
    }
}
}while(a!= 0)
