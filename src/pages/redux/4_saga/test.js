function* rootSaga() {
    console.log('start')
    yield { type: 'PUT', action: { type: 'ADD' } }
    yield new Promise((resolve, reject) => { setTimeout(() => resolve(), 1000) })
    yield { type: 'PUT', action: { type: 'MINUS' } }
}

function runSaga() {

    const it = rootSaga()
    function next() {
        const { done, value: effect } = it.next()

        if (!done) {
            if (effect.type === 'PUT') {
                console.log('effect.action', effect.action)
                next()
            } else if (effect.then) {
                effect.then(next)
            } else {
                next()
            }
        }
    }
    next()
}

runSaga(rootSaga)