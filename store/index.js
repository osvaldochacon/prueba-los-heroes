export const state = () => ({
    contadores: JSON.parse(localStorage.getItem('contadores')) || [],
})

export const getters = {
    getContadores(state) {
        return state.contadores
    },
    getContadoresLength(state) {
        return state.contadores.length
    },
}

export const mutations = {
    agregar(state, nombre) {
        state.contadores.push({ nombre: nombre, valor: 0 });
        localStorage.setItem('contadores', JSON.stringify(state.contadores));
    },
    minus(state, position) {
        let found = state.contadores[position]
        if (found.valor > 0) {
            found.valor -= 1
        }
        localStorage.setItem('contadores', JSON.stringify(state.contadores));
    },
    plus(state, position) {
        let found = state.contadores[position]
        if (found.valor < 20) {
            found.valor += 1
        }
        localStorage.setItem('contadores', JSON.stringify(state.contadores));
    },
    delete(state, position) {
        state.contadores.splice(position, 1);
        localStorage.setItem('contadores', JSON.stringify(state.contadores));
    },
    sortByName(state, order) {
        state.contadores.sort(function (a, b) {
            if (order == "asc") {
                if (a.nombre < b.nombre) { return -1; }
                if (a.nombre > b.nombre) { return 1; }
                return 0;
            } else {
                if (a.nombre > b.nombre) { return -1; }
                if (a.nombre < b.nombre) { return 1; }
                return 0;
            }
        })
    },
    sortByValue(state, order) {
        state.contadores.sort(function (a, b) {
            if (order == "asc") {
                if (a.valor < b.valor) { return -1; }
                if (a.valor > b.valor) { return 1; }
                return 0;
            } else {
                if (a.valor > b.valor) { return -1; }
                if (a.valor < b.valor) { return 1; }
                return 0;
            }
        })
    },
    filterByRange(state, payload) {
        state.contadores = state.contadores.filter(function (contador, index, arr) {
            return contador.valor >= payload.min && contador.valor <= payload.max
        });
    },
    filterByName(state, nombre) {
        state.contadores = JSON.parse(localStorage.getItem('contadores')) || []
        state.contadores = state.contadores.filter(function (contador, index, arr) {
            return contador.nombre.indexOf(nombre) != -1
        });
    },
    cleanFilters(state) {
        state.contadores = JSON.parse(localStorage.getItem('contadores')) || []
    }
}