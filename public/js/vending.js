'use strict'

AFRAME.registerComponent('coinslot',{
	schema: {
	},
	init : function(){
		//setup called at start
		const CONTEXT_AF = this;
		CONTEXT_AF.user = document.querySelector('#user');
		CONTEXT_AF.vendingMachine = document.querySelector('#vendingMachine');

		CONTEXT_AF.el.addEventListener('click', function() {

			console.log(CONTEXT_AF.user.getAttribute('hasCoin'));

			if( parseInt(CONTEXT_AF.user.getAttribute('hasCoin')) === 1){

				vendingMachine.setAttribute('coinsLoaded', parseInt(vendingMachine.getAttribute('coinsLoaded'))+1);
				CONTEXT_AF.user.removeChild(user.querySelector('#coin'));
				CONTEXT_AF.user.setAttribute('hasCoin', '0')

				console.log(vendingMachine.getAttribute('coinsLoaded'));
			}
			
		});
	}
});

AFRAME.registerComponent('vending',{
	schema: {
	},
	init : function(){
		//setup called at start
		const CONTEXT_AF = this;
		CONTEXT_AF.user = document.querySelector('#user');
		CONTEXT_AF.vendingMachine = document.querySelector('#vendingMachine');

		CONTEXT_AF.el.addEventListener('click', function() {

			console.log(vendingMachine.getAttribute('coinsLoaded'));

			if( (parseInt(vendingMachine.getAttribute('coinsLoaded')) > 0 ) && (parseInt(CONTEXT_AF.user.getAttribute('hasCoin')) === 0)){

				vendingMachine.setAttribute('coinsLoaded', parseInt(vendingMachine.getAttribute('coinsLoaded'))-1);

				//create copy element
				var newCan = document.createElement('a-entity');

				//redefine attribute
				newCan.setAttribute('position', { x:0, y:-0.5, z:-2});
				newCan.setAttribute('id', 'can');
				newCan.setAttribute('class', 'interactive');
				newCan.setAttribute('drop', "");
				newCan.setAttribute('geometry', {primitive:'cylinder', radius:0.25, height:0.6}, true);
				newCan.setAttribute('material', this.getAttribute('material'), true);
				newCan.setAttribute('sound', "src: #can_sound; autoplay: true");

				//append
				CONTEXT_AF.user.appendChild(newCan);
				CONTEXT_AF.user.setAttribute('hasCoin', 1);

				CONTEXT_AF.held = true;
				console.log(CONTEXT_AF.held);

				console.log(vendingMachine.getAttribute('coinsLoaded'));
			}
			
		});
	}
});