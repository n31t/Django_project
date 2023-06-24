
var updateBtns = document.getElementsByClassName('update-cart')

for (i = 0; i < updateBtns.length; i++) {
    
	updateBtns[i].addEventListener('click', function(){ // При нажатии на кнопку добавить
		var productId = this.dataset.product
		var action = this.dataset.action
		console.log('productId:', productId, 'Action:', action) // Консоль сайта выведет айди + добавление или убавление

        console.log('User:', user)
        if (user==='AnonymousUser'){
            console.log('Not logged in') // Юзер не зашел
        }
        else{
            updateUserOrder(productId,action) // Функция ниже
        }
	})
}

function updateUserOrder(productId, action){
	console.log('User is authenticated, sending data...')

		var url = '/update_item/'

		fetch(url, {
			method:'POST',
			headers:{
				'Content-Type':'application/json',
                'X-CSRFToken':csrftoken, // Спец токен
			}, 
			body:JSON.stringify({'productId':productId, 'action':action})
		})
		.then((response) => {
		   return response.json();
		})
		.then((data) => {
		    console.log('Data:', data)
            location.reload() //Обнов страницы при нажатии
		});
}
