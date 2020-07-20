import { all } from 'redux-saga/effects';

import cart from './cart/sagas';

export default function* rootSaga() {
    // Caso seja necessário inserir mais sagas, basta adicionar no array de retorno abaixo
    return yield all([cart]);
}
