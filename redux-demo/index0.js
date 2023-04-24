const redux = require('redux');
const createStore=redux.createStore;

const CAKE_ORDERED='CAKE_ORDERED';
const CAKE_RESTOCK='CAKE_RESTOCK';

function orderCake(){
    return{
        type:CAKE_ORDERED,
        quantity:1,
    }
}

function restockCake(qty=1){
    return{
        type:CAKE_RESTOCK,
        payload:qty,
    }
}

const initialState={
    numOfCakes:10,
    anotherProperty:0,
}

const reducer=(state=initialState,action)=>{
    switch(action.type){
        case CAKE_ORDERED:
            return{
                ...state,
                numOfCakes:state.numOfCakes-1,
            }

        case CAKE_RESTOCK:
            return{
                ...state,
                numOfCakes:state.numOfCakes + action.payload,
            }

        default:
            return state
    }

}


const store= createStore(reducer);

console.log('Initial state ',store.getState())

const unsubscribe=store.subscribe(()=>{
    console.log("Initial state - ",store.getState());
})

store.dispatch(orderCake());
store.dispatch(orderCake());
store.dispatch(orderCake());
store.dispatch(restockCake(3));

unsubscribe()
