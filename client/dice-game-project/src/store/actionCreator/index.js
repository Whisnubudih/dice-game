import {
    LOADING_USER,
    ERROR_USER,
    USER_LOGIN_SUCCESS,
    FETCH_PRODUCTS_SUCCESS,
    FETCH_PRODUCTSID_SUCCESS,
    PRODUCTID_DELETE_SUCCESS,
    LOADING_PRODUCTS,
    ERROR_PRODUCTS
} from '../actionTypes'
const baseUrl = 'http://localhost:10000';




// =========================== LOADING & ERROR USER ===========================

export const loadingUser = (payload) => {
    return {
      type: LOADING_USER,
      payload,
    };
  };
  
  export const errorUser = (payload) => {
    return {
      type: ERROR_USER,
      payload,
    };
  };
  
  // =========================== REGISTER NEW USER (ADMIN) ===========================
  
  export const setRegister = (payload) => {
    return (dispatch, getState) => {
      return new Promise((resolve, reject) => {
        dispatch(loadingUser(true));
        dispatch(errorUser(null));
        fetch(`${baseUrl}/register`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            access_token: localStorage.getItem('access_token'),
          },
          body: JSON.stringify(payload),
        })
          .then((data) => {
            if (data.ok) {
              return data.json();
            } else {
              // console.log(data.statusText);
              throw new Error(data.statusText);
            }
          })
          .then((data) => {
            // console.log(data, '<<<<<<<<<<<<<<<<<<<<<< INI DATA SETELAH REGISTER');
  
            if (!data.message) {
              resolve();
            }
            // console.log('OK ADD NEW PRODUCT');
          })
          .catch((err) => {
            dispatch(errorUser(err));
            reject(err);
          })
          .finally(() => {
            dispatch(loadingUser(false));
          });
      });
    };
  };
  
  // =========================== LOGIN USER (ADMIN) ===========================
  
  export const afterLoginSuccess = () => {
    return {
      type: USER_LOGIN_SUCCESS,
    };
  };
  
  export const setLogin = (payload) => {
    return (dispatch, getState) => {
      return new Promise((resolve, reject) => {
        dispatch(loadingUser(true));
        dispatch(errorUser(null));
        fetch(`${baseUrl}/login`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(payload),
        })
          .then((data) => {
            if (data.ok) {
              return data.json();
            } else {
              // console.log(data.statusText);
              throw new Error(data.statusText);
            }
          })
          .then((data) => {
            // console.log(data.access_token);
            // console.log('SUCCESS LOGIN');
  
            if (data.access_token) {
              localStorage.setItem('access_token', data.access_token);
              resolve();
            }
          })
          .catch((err) => {
            dispatch(errorUser(err));
            reject(err);
          })
          .finally(() => {
            dispatch(loadingUser(false));
          });
      });
    };
  };


   // =========================== PRODUCTS ===========================

   export const loadingProducts = (payload) => {
    return {
      type: LOADING_PRODUCTS,
      payload,
    };
  };
  
  export const errorProducts = (payload) => {
    return {
      type: ERROR_PRODUCTS,
      payload,
    };
  };
  
  // =========================== FETCHING PRODUCTS ===========================
  
  export const setProducts = (payload) => {
    return {
      type: FETCH_PRODUCTS_SUCCESS,
      payload,
    };
  };
  
  export const fetchProducts = (payload) => {
    return (dispatch, getState) => {
      dispatch(loadingProducts(true));
      dispatch(errorProducts(null));
      fetch(`${baseUrl}/game`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          access_token: localStorage.getItem('access_token'),
        },
      })
        .then((response) => {
          if (response.ok) {
            return response.json();
          } else {
            throw new Error('Something went wrong');
          }
        })
        .then((data) => {
          // console.log(data);
          dispatch(setProducts(data));
        })
        .catch((err) => {
          dispatch(errorProducts(err));
        })
        .finally(() => {
          dispatch(loadingProducts(false));
        });
    };
  };

  export const addProducts = (payload) => {
    return (dispatch, getState) => {
      return new Promise((resolve, reject) => {
        dispatch(loadingUser(true));
        dispatch(errorUser(null));
        fetch(`${baseUrl}/game`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            access_token: localStorage.getItem('access_token'),
          },
          body: JSON.stringify(payload),
        })
          .then((data) => {
            if (data.ok) {
              return data.json();
            } else {
              // console.log(data.statusText);
              throw new Error(data.statusText);
            }
          })
          .then((data) => {
            // console.log(data, '<<<<<<<<<<<<<<<<<<<<<< INI DATA SETELAH REGISTER');
  
            if (!data.message) {
              resolve();
            }
            // console.log('OK ADD NEW PRODUCT');
          })
          .catch((err) => {
            dispatch(errorProducts(err));
            reject(err);
          })
          .finally(() => {
            dispatch(loadingProducts(false));
          });
      });
    };
  };
  export const productDeleteSucces = (payload) => {
    return {type : PRODUCTID_DELETE_SUCCESS, payload}
}

export const productIdSucces = (payload) => {
  return {type : FETCH_PRODUCTSID_SUCCESS, payload}
}

export const fetchProductId = (id) => {
  return (dispatch,getState) => {
    dispatch(loadingProducts(true));
    dispatch(errorProducts(null));
      fetch(`${baseUrl}/game/${id}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          access_token: localStorage.getItem('access_token'),
        },
      })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Something went wrong');
        }
      })
      .then((data) => {
        // console.log(data);
        dispatch(productIdSucces(data));
      })
      .catch((err) => {
        dispatch(errorProducts(err));
      })
      .finally(() => {
        dispatch(loadingProducts(false));
      });
      
  }
}

 