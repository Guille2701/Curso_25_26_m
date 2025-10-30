//crear un sistema de reservas de un restaurante que tenga un map con clave fecha de la reserva en formato YYYY-MM-DD
// y el valor es un SET con los nombres(DNI) de los clientes que han reservado ese dia

//agregarReservas
//cancelarReserva
//mostrarResevas
//estadisticas-> Reservas por dia, reservas totales, media de reservas


export const ejercicioreservas = () => {
    const reservas = new Map<string, Set<string> >();

    function agregarReservas(fecha:string, nombre:string):void{
        if(!reservas.has(fecha)){
            reservas.set(fecha,new Set<string>());
        }

        reservas.get(fecha)?.add(nombre);
    }


    function cancelarReservas(nombre:string):void{
        for(const [fecha, clientes] of reservas){
            clientes.delete(nombre);
        }
    }

    function mostrarReservas():void{
        console.log("-------- mostrando reservas ---------");
        for( const [fecha, clientes] of reservas){
            console.log(`📅 Fecha: ${fecha} -- 🧑 Clientes: ${clientes.size}`);
            for( const cliente of clientes){
                console.log(`(╯°□°）╯︵ ┻━┻ Cliente: ${cliente}`);
            }
        
        }
    }

    function estadisticas():void{
        console.log("-------- estadisticas ---------");
        let reservasPorDia:number=0;
        let reservasTotales:number=0;
        let mediaReservas:number=0;
        for( const [fecha, clientes] of reservas){
            reservasPorDia=clientes.size;
            reservasTotales+=reservasPorDia;
            mediaReservas=reservasTotales/reservas.size;
            console.log(`╰(*°▽°*)╯ Reservas del dia ${fecha}: ${reservasPorDia}`);
        }
        console.log(`ಠ_ಠ Reservas totales: ${reservasTotales}`);
        console.log(`(☞ﾟヮﾟ)☞ Media de reservas: ${mediaReservas}`);
        
    }

    agregarReservas("2023-01-01","Antonio");
    agregarReservas("2023-01-01","Manolo");
    agregarReservas("2023-01-02","Maria");
    agregarReservas("2023-01-02","Antonia");
    agregarReservas("2023-01-03","Fernando");
    agregarReservas("2023-01-03","Juan");
    agregarReservas("2023-01-04","Ana");
    agregarReservas("2023-01-04","Laura");
    agregarReservas("2023-01-05","Pedro");
    agregarReservas("2023-01-05","Sara");
    agregarReservas("2023-01-06","Carlos");
    agregarReservas("2023-01-06","Luis");


    cancelarReservas("Antonio");
    mostrarReservas();
    estadisticas();
};