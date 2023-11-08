// Hands on Lab
// Registrador de tickets de eventos

class TicketManager {
    #precioBaseDeGanancia = 1.15;

    constructor(){
        this.eventos = [];
    }

    getEventos(){
        return this.eventos;
        // console.log(this.eventos)
    }

    agregarEvento(nombre, lugar, precio){
        let id_evento =(this.getEventos()).length;
        
        let evento = {
            nombre: nombre,
            lugar: lugar,
            precio: precio * this.#precioBaseDeGanancia,
            capacidad: 50,
            fecha: Date(),
            participantes: [],
            id: ++id_evento
        }
        this.eventos.push(evento);

        return this.eventos;
    }
    traerEvento(idEvento){
        let evento = this.eventos.find(e => e.id == idEvento) 
        if(evento){
            return evento;
        } else{
            return null;
        }
    }
    estaRegistrado(idEvento, IdPersona){
        const evento = this.traerEvento(idEvento)
        if(evento == null){
            return ['El evento no existe'];
        }
        let registro = evento.participantes.find(idParticipante => idParticipante == IdPersona);
        if (registro === undefined){
            return true;
        } else{
            return false;
        }
    }
    agregarParticipante(idEvento, idParticipante){
        const evento = this.traerEvento(idEvento)
        if(evento == null){
            return ['El evento no existe'];
        }
        if(this.estaRegistrado(idEvento, idParticipante)){
            evento.participantes.push(idParticipante)
            return evento
        }else {
            return 'Ya estas registrado'
        }
    }

    ponerEventoEnGira(idEvento, nLocalidad, nFecha){
        const evento = this.traerEvento(idEvento);
        let id_evento =(this.getEventos()).length;
        if(!evento){
            return 'El Evento no existe';
        }
        let nuevoEvento = {...evento};
        nuevoEvento.lugar = nLocalidad;
        nuevoEvento.fecha = nFecha;
        nuevoEvento.id = ++id_evento;
        this.eventos.push(nuevoEvento)
        return eventos;
    }
}

const ticketManager = new TicketManager();

let evento = ticketManager.agregarEvento('Baradero Rock', 'Baradero', 1000)
evento = ticketManager.ponerEventoEnGira(1,'Baradero Rock2', 'Baradero', 1000)

console.log(evento);