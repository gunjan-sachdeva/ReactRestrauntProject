import React from 'react'

function Faq() {
  return (
    <div>
        <div class="container">
    <h1 class="text-center m-4">Frequently Asked Question!!!</h1>
</div>

<div class="accordion md-accordion" id="accordionEx" role="tablist" aria-multiselectable="true">

    
    <div class="card">
  
     
      <div class="card-header" role="tab" id="headingOne1">
        <a data-toggle="collapse" data-parent="#accordionEx" href="#collapseOne1" aria-expanded="true"
          aria-controls="collapseOne1">
          <h5 class="mb-0">
           how to Make Your Own Dalgona Coffee at Home!<i class="fas fa-angle-down rotate-icon"></i>
          </h5>
        </a>
      </div>
  
     
      <div id="collapseOne1" class="collapse show" role="tabpanel" aria-labelledby="headingOne1"
        data-parent="#accordionEx">
        <div class="card-body">
            How to Make Your Own Dalgona Coffee While Staying at Home Stuck at home but still need your daily coffee
        </div>
      </div>
  
    </div>
   
  
   
    <div class="card">
  
     
      <div class="card-header" role="tab" id="headingTwo2">
        <a class="collapsed" data-toggle="collapse" data-parent="#accordionEx" href="#collapseTwo2"
          aria-expanded="false" aria-controls="collapseTwo2">
          <h5 class="mb-0">
            5 Differences between Arabica and Robusta Coffee Beans <i class="fas fa-angle-down rotate-icon"></i>
          </h5>
        </a>
      </div>
  
      
      <div id="collapseTwo2" class="collapse" role="tabpanel" aria-labelledby="headingTwo2"
        data-parent="#accordionEx">
        <div class="card-body">
            From the familiar charm of the streetside kaapi bar to the third wave scene in New Delhi’s trendiest quarters, Indian 
        </div>
      </div>
  
    </div>
   
   <div class="card">
      <div class="card-header" role="tab" id="headingThree3">
        <a class="collapsed" data-toggle="collapse" data-parent="#accordionEx" href="#collapseThree3"
          aria-expanded="false" aria-controls="collapseThree3">
          <h5 class="mb-0">
            COFFEE VARIETIES IN INDIA <i class="fas fa-angle-down rotate-icon"></i>
          </h5>
        </a>
      </div>
  
     
      <div id="collapseThree3" class="collapse" role="tabpanel" aria-labelledby="headingThree3"
        data-parent="#accordionEx">
        <div class="card-body">
            ARABICA COFFEE Arabica coffee (COFFEA ARABICA L) is a small tree in its original habitat but grows like
        </div>
      </div>
  
    </div>

    <div class="card">
      <div class="card-header" role="tab" id="headingThree4">
        <a class="collapsed" data-toggle="collapse" data-parent="#accordionEx" href="#collapseThree4"
          aria-expanded="false" aria-controls="collapseThree4">
          <h5 class="mb-0">
          How to use a Coffee Press/ French Press/ Cafetiere <i class="fas fa-angle-down rotate-icon"></i>
          </h5>
        </a>
      </div>
  
     
      <div id="collapseThree4" class="collapse" role="tabpanel" aria-labelledby="headingThree4"
        data-parent="#accordionEx">
        <div class="card-body">
        Using a coffee press is simple and easy. If you have the luxury of a coffee grinder, grind your beans first. If you don’t using store-bought coffee works just as well. Scoop your coffee (around a tablespoon or more) into the jar.
        </div>
      </div>
  
    </div>

    <div class="card">
      <div class="card-header" role="tab" id="headingThree5">
        <a class="collapsed" data-toggle="collapse" data-parent="#accordionEx" href="#collapseThree5"
          aria-expanded="false" aria-controls="collapseThree5">
          <h5 class="mb-0">
          Why does coffee make me feel tired? <i class="fas fa-angle-down rotate-icon"></i>
          </h5>
        </a>
      </div>
  
     
      <div id="collapseThree5" class="collapse" role="tabpanel" aria-labelledby="headingThree5"
        data-parent="#accordionEx">
        <div class="card-body">
        Coffee is best known for it’s high levels of natural caffeine – so why does it leave some of us feeling tired? There are a variety of reasons that caffeine affects you differently to how it affects others.
        </div>
      </div>
  
    </div>

    <div class="card mb-4">
      <div class="card-header" role="tab" id="headingThree6">
        <a class="collapsed" data-toggle="collapse" data-parent="#accordionEx" href="#collapseThree6"
          aria-expanded="false" aria-controls="collapseThree5">
          <h5 class="mb-0">
          How to remove coffee stains <i class="fas fa-angle-down rotate-icon"></i>
          </h5>
        </a>
      </div>
  
     
      <div id="collapseThree6" class="collapse" role="tabpanel" aria-labelledby="headingThree6"
        data-parent="#accordionEx">
        <div class="card-body">
        Coffee stains can be dark and difficult to remove. As soon as coffee has been spilt, blot the stain with paper, and then rinse it with cold water. These two simple steps usually help to remove the stain
        </div>
      </div>
  
    </div>
</div>
    </div>
  )
}

export default Faq;