import React, { Component } from 'react'
import Dog from '../images/IMG_0541 (2).JPG'
import artemie from '../images/MTenn.JPG'
import Marissa from '../images/56859254072__D0AB336A-94B5-4C39-A7FA-813540F25E2D.JPG'

export default class Home extends Component {
  render() {
    return (
      <div>
        <div class='first'>
          <div class='left-container'>
            <img src={Dog} class="home-img"  >
          </img>
        </div>
          <div class='right-container'>
            <div class='text-container'>
              <div class='title-container'>
                <h1 class='title'>Dog sitting & boarding</h1>
                </div>
              <p class='sub-title'>A loving and friendly environment for pups</p>
              <p class='sub-title'>In New York City</p>
              <div class='enroll-button-container'>
                <a class='enroll-enroll' href='/enrolls'><p class='enroll-button2'>Get Started</p></a>
            </div>
            </div>
          
          </div>
        </div>
        <div class='second' id='dates'>
          <div class='second-text-container'>
          <h1 class='sub-sub-title'>Free pickup and drop off to all five boroughs!</h1>
            </div>
        </div>
        <div class='bring' id='bring'>
          <h1 class='headline'>Details</h1>
          <h2 class='subtitle'>Food</h2>
          <h3 class='blurb3'>Each	dog	is	fed	based	on	your	
requested	schedule,	typically	2x/
day.	</h3>
          <h2 class='subtitle'>Walks</h2>
          <h3 class='blurb3'>Following	our	morning	park	play	
and	a	long	day	of	running	around	
in	our	spacious	backyard,	we	take	
the	pups	for	an	evening	walk	
around	the	neighborhood	(Park	
Slope).	</h3>
          <h2 class='sub-name'>Play</h2>
          <h3 class='blurb3'>   Pups	visit	Prospect	Park	for	
some	big	play	time	every	
morning	(usually	1-2	hours).	</h3>	
          <h2>Our Home</h2>
          <h3 class='blurb3'>  Dogs	have	access	to	spacious	
garden	backyard	all		day	and	
cuddle	up	in	a	cozy	living	room	
at	bedtime	</h3>
        </div>
        <div class="third" id='location'>
          <h1>Our Location </h1>
          <h4 class='blurb5'>Park Slope, Brooklyn</h4>
          <h4 class='blurb4'>(FREE	pick	up	and	drop	off	included	–	we’ll	come	to	you!)</h4>
          <h1>-</h1>
          <iframe class='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24209.01944059752!2d-73.99896049095508!3d40.67116112751017!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25b0193dc39e1%3A0x3e0395e48aa1e4!2sPark%20Slope%2C%20Brooklyn%2C%20NY!5e0!3m2!1sen!2sus!4v1596986748482!5m2!1sen!2sus" width="600" height="450" frameborder="0" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
         
        </div>
        <div class='pricing' id='pricing'>
          <h1>Pricing</h1>
          <h2>Daily</h2>
          <h4> $60/night per dog</h4>
          <h2>Weekly</h2>
          <h4> $350/week per dog</h4>
        </div>
        <div class='fifth' id='coaches'>
          <h1>Meet our Sitters</h1>
          <h1>-</h1>
          <h2 class='name'>Marissa</h2>
          <h3 class='sub-name'>Life-long	Dog	Mom	</h3>
          <p class='blurb2'>Marissa’s	current	paw	pal,	Bear,	
changed	her	life.	As	a	life-long	dog	
mom,	Marissa	is	a	major	advocate	of	
positivity	based	training.	She	is	on	a	
mission	to	create	loving	environments	
for	every	pup	and	provide	the	same	
love	and	affection	they	receive	from	
their	human	companions.	</p>
          <img class="profile-img" src={Marissa} />
          
          <h2 class='name'>Artemie</h2>
          <h3 class='sub-name'>New	York	Native</h3>
          <p class='blurb2'>Afer	rescuing	his	current	paw	pal,	
Sunny,	Artemie	realized	the	power	of	
the	paw.	His	favorite	activity	is	
spending	hours	in	the	park	with	pups	
and	getting	as	much	safe	outdoor	time	
with	them	as	possible.	“The	dog	
whisperer”,	Artemie	understands	the	
needs	of	every	unique	pup.		</p>
          <img class="profile-img" src={artemie} />
         
        
        </div>
        {/* <div class="enroll" id='enroll'>
          <h1>Ready to Start?</h1>
          <h1>-</h1>
          <a class='enroll-enroll' href='/enrolls'><p class='enroll-button2'>Get Started</p></a>
        </div> */}
       
      </div>
    )
  }
}
