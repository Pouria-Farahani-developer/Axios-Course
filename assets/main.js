// -----------------------------------------------------------------
//Global Axios
// --------------------------------------------------------------------

axios.defaults.headers.common['Authorization'] = 'AUTH_TOKEN';
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

// -----------------------------------------------------------------
//Global Axios
// --------------------------------------------------------------------

// -------------------------------------------------------------
// GET REQUEST
// -----------------------------------------------------------------
function getTodos() {
// ----------------------------------------------------------------------
  // FIRST WAY TO GET 
// ---------------------------------------------------------------------------

  // axios(
  //   {
  //     method : 'get',
  //     url : 'https://jsonplaceholder.typicode.com/todos',
  //     params : {
  //       _limit : 5
  //     }
  //   }
  // ).then(res => {
  //   showOutput(res)
  // }).catch(err => {
  //   console.error(err)
  // })

// ----------------------------------------------------------------------
  // FIRST WAY TO GET 
// ---------------------------------------------------------------------------


// ----------------------------------------------------------------------
  // SECOND WAY TO GET 
// ---------------------------------------------------------------------------

  // axios.get("https://jsonplaceholder.typicode.com/todos",{params : {
  //   _limit : 7
  // }}).then(res => {
  //   showOutput(res)
  // }).catch(err => {
  //   console.error(err)
  // })

// ----------------------------------------------------------------------
  // SECOND WAY TO GET 
// ---------------------------------------------------------------------------

// ------------------------------------------------------------------------------
// THIRD WAY TO GET
// ---------------------------------------------------------------------------------

  axios.get("https://jsonplaceholder.typicode.com/todos?_limit=4")
    .then(res => {
      showOutput(res)
    }).catch(err => {
      console.error(err)
    })
}

// ------------------------------------------------------------------------------
// THIRD WAY TO GET
// ---------------------------------------------------------------------------------


// -------------------------------------------------------------
// GET REQUEST
// -----------------------------------------------------------------


// -------------------------------------------------------------
// POST REQUEST
// -----------------------------------------------------------------

function addTodo() {


// -------------------------------------------------------------
// FIRST WAY TO POST
// -----------------------------------------------------------------

  // axios({
  //   method : 'post',
  //   url : "https://jsonplaceholder.typicode.com/todos",
  //   data : {
  //     title : 'new to do',
  //     compeleted : false
  //   }
  // }).then(res => {
  //   showOutput(res)
  // }).catch(err => {
  //   console.error(err)
  // })


// -------------------------------------------------------------
// FIRST WAY TO POST
// -----------------------------------------------------------------


// -------------------------------------------------------------
// SECOND WAY TO POST
// -----------------------------------------------------------------

  axios.post("https://jsonplaceholder.typicode.com/todos", {
    title: 'new todo',
    completed: true
  }).then(res => {
    showOutput(res)
  }).catch(err => {
    console.error(err)
  })
}


// -------------------------------------------------------------
// SECOND WAY TO POST
// -----------------------------------------------------------------


// -------------------------------------------------------------
// POST REQUEST
// -----------------------------------------------------------------


// -------------------------------------------------------------
// PUT/PATCH REQUEST
// -----------------------------------------------------------------

function updateTodo() {
  
// -------------------------------------------------------------
// PUT REQUEST
// -----------------------------------------------------------------

  // axios.put("https://jsonplaceholder.typicode.com/todos/1", {
  //   title: "upadate to do ",
  //   completed: true
  // }).then(res => {
  //   showOutput(res)
  // }).catch(err => {
  //   console.error(err)
  // })


// -------------------------------------------------------------
// PUT REQUEST
// -----------------------------------------------------------------


// -------------------------------------------------------------
// PATCH REQUEST
// -----------------------------------------------------------------

  axios.patch("https://jsonplaceholder.typicode.com/todos/1", {
    title: "upadate to do ",
    completed: true
  }).then(res => {
    showOutput(res)
  }).catch(err => {
    console.error(err)
  })

// -------------------------------------------------------------
// PATCH REQUEST
// -----------------------------------------------------------------

}


// -------------------------------------------------------------
// PUT/PATCH REQUEST
// -----------------------------------------------------------------



// -------------------------------------------------------------
// DELETE REQUEST
// -----------------------------------------------------------------

function removeTodo() {
  axios.delete("https://jsonplaceholder.typicode.com/todos/1")
    .then(res => {
      showOutput(res)
    }).catch(err => {
      console.error(err)
    })
}


// -------------------------------------------------------------
// DELETE REQUEST
// -----------------------------------------------------------------


// -------------------------------------------------------------
// SIMULTANEOUS DATA
// -----------------------------------------------------------------

function getData() {


// -------------------------------------------------------------
// FIRST WAY WITHOUT SPREAD
// -----------------------------------------------------------------

  // axios.all([
  //   axios.get("https://jsonplaceholder.typicode.com/todos"),
  //   axios.get("https://jsonplaceholder.typicode.com/posts")
  // ]).then(res => {
  //   console.log(res[0]);
  //   console.log(res[1]);
  // }).catch(err => {
  //   console.error(err)
  // })


// -------------------------------------------------------------
// FIRST WAY WITHOUT SPREAD
// -----------------------------------------------------------------


// -------------------------------------------------------------
// SECOND WAY WITH SPREAD
// -----------------------------------------------------------------

  axios.all([
    axios.get("https://jsonplaceholder.typicode.com/todos"),
    axios.get("https://jsonplaceholder.typicode.com/posts")
  ]).then(axios.spread((posts) => {
    showOutput(posts)
  })).catch(err => {
    console.error(err)
  })

// -------------------------------------------------------------
// SECOND WAY WITH SPREAD
// -----------------------------------------------------------------

}


// -------------------------------------------------------------
// SIMULTANEOUS DATA
// -----------------------------------------------------------------


// -------------------------------------------------------------
// CUSTOM HEADERS
// -----------------------------------------------------------------

function customHeaders() {

  const Config = {
    headers: {
      "content-type": "application/json",
      Authorization: 'sometoken'
    }
  }

  axios.post("https://jsonplaceholder.typicode.com/todos", {
    title: 'new todo',
    completed: true
  }, Config).then(res => {
    showOutput(res)
  }).catch(err => {
    console.error(err)
  })
}


// -------------------------------------------------------------
// CUSTOM HEADERS
// -----------------------------------------------------------------


// -------------------------------------------------------------
// TRANSFORMING REQUESTS & RESPONSES
// -----------------------------------------------------------------

function transformResponse() {

  const options = {
    method: "post",
    url: "https://jsonplaceholder.typicode.com/todos",
    data: {
      titl: "new to do ",
      completed: true
    },

    transformResponse: axios.defaults.transformResponse.concat(data => {
      data.titl = data.titl.toUpperCase();
      return data;
    })

  }

  axios(options).then(res => {
    showOutput(res)
  }).catch(err => {
    console.error(err)
  })
}

// -------------------------------------------------------------
// TRANSFORMING REQUESTS & RESPONSES
// -----------------------------------------------------------------



// -------------------------------------------------------------
// ERROR HANDLING
// -----------------------------------------------------------------

function errorHandling() {
  axios.get("https://jsonplaceholder.typicode.com/todoss",{
    validateStatus :  function(status){
      return status < 500; // reject  only if status is greater or equal to 500
    }
  })
  .then(res => {
    showOutput(res)
  }).catch(err => {
    if(err.response){

      // server responded with a status other than 200 range
      console.log(err.response.data);
      console.log(err.response.status);
      console.log(err.response.headers);

      if(err.response.status === 404 ){
        alert("Error : page not found")
      }else if(err.request){
        // requeset was made but no response 
        console.error(err.request)
      } else {
        console.error(err.message)
      }
    }
  })
}

// -------------------------------------------------------------
// ERROR HANDLING
// -----------------------------------------------------------------



// -------------------------------------------------------------
// CANCEL TOKEN
// -----------------------------------------------------------------

function cancelToken() {

  console.log(axios.CancelToken.source())

  const source = axios.CancelToken.source();

  axios.get("https://jsonplaceholder.typicode.com/todos",{
    cancelToken : source.token
  })
  .then(res => {
    showOutput(res)
  }).catch(err => {
    if(axios.isCancel(err)){
      console.log(err.message)
    }
  })

  if(true){
    source.cancel('request canceled !')
  }

}

// -------------------------------------------------------------
// CANCEL TOKEN
// -----------------------------------------------------------------




// -------------------------------------------------------------
// INTERCEPTING REQUESTS & RESPONSES
// -----------------------------------------------------------------

axios.interceptors.request.use(
  config => {
    console.log(`${config.method.toUpperCase()} request sent to ${config.url} 
    at ${new Date().toLocaleTimeString()}`)

    return config
  }, err => {
    return Promise.reject(err)
  }
)

// -------------------------------------------------------------
// INTERCEPTING REQUESTS & RESPONSES
// -----------------------------------------------------------------



// -------------------------------------------------------------
// AXIOS INSTANCES
// -----------------------------------------------------------------

// const axiosInstance = axios.create({
//   baseURL : 'https://jsonplaceholder.typicode.com/'
// })

// axiosInstance.get('/comments').then(res=>{
//   showOutput(res)
// }).catch(err => {
//   console.error(err)
// })

// -------------------------------------------------------------
// AXIOS INSTANCES
// -----------------------------------------------------------------

// Show output in browser
function showOutput(res) {
  document.getElementById('res').innerHTML = `
  <div class="card card-body mb-4">
    <h5>Status: ${res.status}</h5>
  </div>

  <div class="card mt-3">
    <div class="card-header">
      Headers
    </div>
    <div class="card-body">
      <pre>${JSON.stringify(res.headers, null, 2)}</pre>
    </div>
  </div>

  <div class="card mt-3">
    <div class="card-header">
      Data
    </div>
    <div class="card-body">
      <pre>${JSON.stringify(res.data, null, 2)}</pre>
    </div>
  </div>

  <div class="card mt-3">
    <div class="card-header">
      Config
    </div>
    <div class="card-body">
      <pre>${JSON.stringify(res.config, null, 2)}</pre>
    </div>
  </div>
`;
}

// Event listeners
document.getElementById('get').addEventListener('click', getTodos);
document.getElementById('post').addEventListener('click', addTodo);
document.getElementById('update').addEventListener('click', updateTodo);
document.getElementById('delete').addEventListener('click', removeTodo);
document.getElementById('sim').addEventListener('click', getData);
document.getElementById('headers').addEventListener('click', customHeaders);
document
  .getElementById('transform')
  .addEventListener('click', transformResponse);
document.getElementById('error').addEventListener('click', errorHandling);
document.getElementById('cancel').addEventListener('click', cancelToken);