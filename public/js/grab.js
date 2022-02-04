'use strict'

AFRAME.registerComponent('grab',{
	schema: {
	},
	init : function(){
		//setup called at start
		const CONTEXT_AF = this;
		CONTEXT_AF.user = document.querySelector('#user');
		CONTEXT_AF.scene = document.querySelector('#scene');
		


		CONTEXT_AF.held = false;
		
		CONTEXT_AF.el.addEventListener('click', function() {
			if (parseInt(CONTEXT_AF.user.getAttribute('hasCoin')) === 0){
				console.log(this.getAttribute('id'));
				

				//create copy element
				var newCoin = document.createElement('a-entity');

				//redefine attribute
				newCoin.setAttribute('position', { x:0, y:-0.5, z:-2});
				newCoin.setAttribute('id', this.getAttribute('id'));
				newCoin.setAttribute('class', this.getAttribute('class'));
				newCoin.setAttribute('drop', "");
				newCoin.setAttribute('geometry', this.getAttribute('geometry'), true);
				newCoin.setAttribute('material', this.getAttribute('material'), true);
				newCoin.setAttribute('sound', "src:" + this.getAttribute('sound').src + "; autoplay: true");

				//append
				CONTEXT_AF.user.appendChild(newCoin);
				CONTEXT_AF.user.setAttribute('hasCoin', 1);
				CONTEXT_AF.scene.removeChild(this);

				CONTEXT_AF.held = true;
				console.log(CONTEXT_AF.held);
			}
			
		});
	}
});

AFRAME.registerComponent('drop',{
	schema: {
	},
	init : function(){

		//setup called at start
		const CONTEXT_AF = this;
		CONTEXT_AF.user = document.querySelector('#user');
		CONTEXT_AF.scene = document.querySelector('#scene');

		CONTEXT_AF.held = false;

		CONTEXT_AF.el.addEventListener('click', function() {

			console.log(this.getAttribute('id'));
			//create copy element
			var newCoin = document.createElement('a-entity');

			//redefine attribute
			newCoin.setAttribute('position', { x: CONTEXT_AF.user.getAttribute('position').x, y:0+this.getAttribute('geometry').height/2, z: CONTEXT_AF.user.getAttribute('position').z});
			newCoin.setAttribute('id', this.getAttribute('id'));
			newCoin.setAttribute('class', this.getAttribute('class'));
			newCoin.setAttribute('grab', "");
			newCoin.setAttribute('geometry', this.getAttribute('geometry'), true);
			newCoin.setAttribute('material', this.getAttribute('material'), true);
			newCoin.setAttribute('sound', "src: " + this.getAttribute('sound').src + "; autoplay: true");

			//append
			CONTEXT_AF.scene.appendChild(newCoin);
			CONTEXT_AF.user.setAttribute('hasCoin', 0);
			CONTEXT_AF.user.removeChild(this);

			CONTEXT_AF.held = true;
			console.log(CONTEXT_AF.held);
		});
	}
});