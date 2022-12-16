var clock = {

    seconds: 0,
    minutes: 0,
    hours: 0,

    aviso(mensagem) 
    {
        mensagem ? window.alert(mensagem) : window.alert('Finalizou')
    },
    atualizar() {

        const spaceHours = document.querySelector('.hours');
        spaceHours.innerHTML = `${this.hours}:`

        const spaceMinutes = document.querySelector('.minutes')
        spaceMinutes.innerHTML = `${this.minutes}`

        const spaceSeconds = document.querySelector('.seconds')
        spaceSeconds.innerHTML = `:${this.seconds}`
    },

    adicionar() {

        if ( this.seconds <  59 ) 
        {
            this.seconds += 1;
        } 
        else if ( this.minutes < 59 ) 
        {
            this.minutes += 1;
            this.seconds = 0;
        } else if ( this.hours < 24 ) 
        {
            this.hours += 1;
            this.minutes = 0;
            this.seconds = 0;
        };
        this.atualizar()
    },

    diminuir() {

        if ( this.seconds > 0 ) 
        {
            this.seconds -= 1
        } 
        else if ( this.minutes > 0 ) 
        {
            this.minutes -= 1
            this.seconds += 59
        }
        else if ( this.hours > 0 ) 
        {
            this.hours -= 1
            this.minutes += 59
        };
        clock.atualizar()
    },

    play() 
    {   
        clock.diminuir()
        clock.seconds > 0 || clock.minutes > 0 || clock.hours > 0 ? setTimeout( clock.play, 1000 ) : setTimeout( clock.aviso, 1000 )
    }
}