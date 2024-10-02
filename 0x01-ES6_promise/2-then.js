function handleResponseFromAPI(promise) {
  promise.then(response => {
    console.log('Response:', response);
  }).catch(error => {
    console.error('Error:', error);
  });
}
