let onglet1=Vue.component('onglet1',
{
	data:function()
	{
		return {currentonglet:'',slide_tab,slide_numero,timer,isflights:false,ishotels:false,iscars:false,isok1:false,isok2:false,isok3:false,onglet_isok:false}
	},
	template:
	`
		<div class="onglet1_content">
			<div class="bouton_container">
				<button @click="flights_function" :class="{flights_class:isflights}">FLIGHTS</button>
				<button @click="hotels_function" :class="{hotels_class:ishotels}">HOTELS</button>
				<button @click="cars_function" :class="{cars_class:iscars}">CARS</button>
			</div>
			<div class="onglet1content">
				<keep-alive>
					<component :is="currentonglet">

					</component>
				</keep-alive>	
			</div>
			<div class="slider_content">
			<transition name="onglet_slider">
				<keep-alive>
					<component :is=slide_tab[slide_numero] v-if="onglet_isok">
						
					</component>
				</keep-alive>	
			</transition>		
			</div>
		</div>
	`,
	mounted:function()
	{
		this.currentonglet='flights';
		this.isflights=true;
		this.start();
	},
	methods:
	{
		flights_function:function()
		{
			this.currentonglet='flights';
			this.isflights=true;
			this.ishotels=false;
			this.iscars=false;
		},
		hotels_function:function()
		{
			this.currentonglet='hotels';
			this.isflights=false;
			this.ishotels=true;
			this.iscars=false;
		},
		cars_function:function()
		{
			this.currentonglet='cars';
			this.isflights=false;
			this.ishotels=false;
			this.iscars=true;
		},
		start:function()
		{
			this.timer=setInterval(this.next,6000);
			this.onglet_isok=!this.onglet_isok;
		},
		next:function()
		{
			this.slide_numero+=1;
			if(this.slide_numero==3)
			{
				this.slide_numero=0;
				this.onglet_isok=true;
			}
		}
	}
})

let slide_1=Vue.component('slide_2',
{
	template:
	`
		<div class="slide2_content">
			<h1>Welcome to Travel!</h1>
		</div>	
	`
})


let slide_2=Vue.component('slide_3',
{
	template:
	`
		<div class="slide3_content">
			<h1>Slide 2</h1>
		</div>	
	`
})
let slide_3=Vue.component('slide_1',
{
	template:
	`
		<div class="slide1_content">
			<h1>Slide 3</h1>
			<h3>Example 1</h3>
			<h4>Example 2</h4>
		</div>	
	`
})
let text_banniere=Vue.component('text_bannniere',
{
	template:
	`
		<div class="text_banniere">
			<div class="text_banniere_content">
				<div class="text_banniere_titre">
					<h1>Explore your travel opportunities!</h1>
				</div>
				<div class="texte_banniere_links">
					<ul>
						<router-link to='/trip_planner'>
							<li>TRIP PLANNER</li>
						</router-link>
						<router-link to='/fare_finder'>
							<li>FARE FINDER</li>
						</router-link>	
						<router-link to='/destination_map'>
							<li>DESTINATION MAP</li>
						</router-link>
						<router-link to='/destinations'>
							<li>DESTINATIONS</li>
						</router-link>
					</ul>	
				</div>	
			</div>
		</div>
	`
})
let slide_numero=0;
let timer=null;
let slide_tab=[slide_1,slide_2,slide_3];
let home=Vue.component('home',
{
	template:
	`
		<div class="home">
			<div class="header_home">	
			</div>
			<div class="header_home_content">
				<onglet1></onglet1>
			</div>	
			<div class="banniere_text">
				<text_banniere></text_banniere>
			</div>
		</div>
	`,
	components:
	{
		'text_banniere':text_banniere
	}	
})


let flights=Vue.component('flights',
{
	template:
	`
		<div class="flights_content">
			<h1>This is flight content</h1>
		</div>
	`
})
let hotels=Vue.component('hotels',
{
	template:
	`
		<div class="hotels_content">
			<h1>This is hotels content</h1>
		</div>
	`
})
let cars=Vue.component('cars',
{
	template:
	`
		<div class="cars_content">
			<h1>This is cars content</h1>
		</div>
	`
})


let plan=Vue.component('plan',
{
	template:
	`
		<div class="plan">

		</div>
	`	
})
let information=Vue.component('information',
{
	template:
	`
		<div class="information">

		</div>
	`	
})
let checkin=Vue.component('chekin',
{
	template:
	`
		<div class="checkin">

		</div>
	`	
})
let signin=Vue.component('signin',
{
	template:
	`
		<div class="signin">

		</div>
	`	
})
let language=Vue.component('language',
{
	template:
	`
		<div class="language">

		</div>
	`	
})

let router=new VueRouter({
	routes:
	[
		{path:'/',component:home,name:'Home'},
		{path:'/plan',component:plan,name:'Plan'},
		{path:'/information',component:information,name:'Information'},
		{path:'/checkin',component:checkin,name:'Checkin'},
		{path:'/signin',component:signin,name:'Signin'},
		{path:'/language',component:language,name:'Language'}
	]
})

let vm=new Vue({
router,
data:
{
	currentonglet:''
}
}).$mount('#app');