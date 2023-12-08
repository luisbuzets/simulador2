var COLORS = {
    circles: {
        healthy: {
            fill: '#FFFFFF',
            stroke: '#808080',
        },
        intensive_care: {
            fill: '#8c0000',
            stroke: '#FF0000',
        },
        infected: {
            fill: '#40d11b',
            stroke: '#3c6930',
        },
        immune: {
            fill: '#00FFE7',
            stroke: '#005eff',
        },
        dead: {
            fill: '#000000',
            stroke: '#000000',
        },
        vaccinated: {
            fill: '#fcba03', // Color de relleno para personas vacunadas
            stroke: '#917830', // Color de borde para personas vacunadas
        },
    },
}
MAX_INITIAL_POPULATION = 2000;

/* Population */
maxVelocity = 3.0;
initialPopulation = 400;
initialInfected = 10;

/* Infection */
infectionRate = 0.2;
infectionDuration = 14;
lethalityRate = 0.02;

/* Quarantine */
quarantineActivated = true;
daysBeforeSymphtoms = 5;
asymptomaticRate = 0.1;

/* Intensive care */
intensiveCareRate = 0.2;
intensiveCareBeds = Math.ceil((5) / 100 * initialPopulation)

vaccinatePer100 = 12; 

/* Chart with daily statistics*/
var lineGraph;

/*  */
var counters = {
    healthy: document.getElementById('total_healthy'),
    infected: document.getElementById('total_infected'),
    in_quarantine: document.getElementById('total_in_quarantine'),
    in_intensive_care: document.getElementById('total_in_intensive_care'),
    immune: document.getElementById('total_immune'),
    dead: document.getElementById('total_dead'),
    dead_for_intensive_care: document.getElementById('total_dead_for_intensive_care'),
    vaccinated: document.getElementById('total_vaccinated'),
}
var statistics = {
    reset: function() {
        this.totalPeople = initialPopulation;
        this.currentCured = 0;
        this.currentInfected = initialInfected;
        this.currentInQuarantine = 0;
        this.currentInIntensiveCare = 0;
        this.currentDead = 0;
        this.currentDeadForIntensiveCare = 0;
        this.currentVaccinated = 0;
    },

    /* Total people */
    get totalPeople() {
        return this._totalPeople;
    },
    set totalPeople(value) {
        this._totalPeople = Math.max(0, Math.min(value, initialPopulation));
        counters.healthy.innerHTML = this.currentHealthy;
    },

    /* Current infected */
    get currentInfected() {
        return this._currentInfected;
    },
    set currentInfected(value) {
        this._currentInfected = Math.max(value, 0);
        counters.infected.innerHTML = this._currentInfected;
        counters.healthy.innerHTML = this.currentHealthy;
    },

    /* Current in quarantine (among the infected) */
    get currentInQuarantine() {
        return this._currentInQuarantine;
    },
    set currentInQuarantine(value) {
        this._currentInQuarantine = Math.max(value, 0);
        counters.in_quarantine.innerHTML = this._currentInQuarantine;
    },

    /* Current in intensive care (among the infected) */
    get currentInIntensiveCare() {
        return this._currentInIntensiveCare;
    },
    set currentInIntensiveCare(value) {
        this._currentInIntensiveCare = Math.max(value, 0);
        counters.in_intensive_care.innerHTML = this._currentInIntensiveCare;
    },
    
    /* Current cured */
    get currentCured() {
        return this._currentCured;
    },
    set currentCured(value) {
        this._currentCured = Math.max(value, 0);
        counters.immune.innerHTML = this._currentCured;
        counters.healthy.innerHTML = this.currentHealthy;
    },

    /* Current deaths */
    get currentDead() {
        return this._currentDead;
    },
    set currentDead(value) {
        this._currentDead = Math.max(value, 0);
        counters.dead.innerHTML = this._currentDead;
        counters.healthy.innerHTML = this.currentHealthy;
    },

    /* Current deaths because of lack of intensive care beds */
    get currentDeadForIntensiveCare() {
        return this._currentDeadForIC;
    },
    set currentDeadForIntensiveCare(value) {
        this._currentDeadForIC = Math.max(value, 0);
        counters.dead_for_intensive_care.innerHTML = this._currentDeadForIC;
    },

    /* Current healthy */
    
    get currentVaccinated() {
        return this._currentVaccinated;
    },
    set currentVaccinated(value) {
        this._currentVaccinated = Math.max(value, 0);
        counters.vaccinated.innerHTML = this._currentVaccinated;
        counters.healthy.innerHTML = this.currentHealthy;
    },

    get currentHealthy() {
        const result = this._totalPeople - this._currentInfected - this._currentCured - this._currentDead - this._currentVaccinated;
        return Math.max(result, 0);
    },
}