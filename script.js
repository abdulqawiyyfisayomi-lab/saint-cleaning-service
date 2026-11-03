const toggle=document.querySelector('.menu');const nav=document.querySelector('.nav');if(toggle&&nav){toggle.addEventListener('click',()=>{const open=nav.classList.toggle('open');toggle.setAttribute('aria-expanded',String(open));toggle.textContent=open?'×':'☰';});nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');toggle.setAttribute('aria-expanded','false');toggle.textContent='☰';}));}
document.querySelectorAll('.year').forEach(el=>el.textContent=new Date().getFullYear());
const currentPage=location.pathname.split('/').pop()||'index.html';
document.querySelectorAll('.nav a[href]').forEach(link=>{
  const linkPage=new URL(link.href,location.href).pathname.split('/').pop();
  if(linkPage===currentPage&&!link.classList.contains('navbutton')){
    link.classList.add('active');
    link.setAttribute('aria-current','page');
  }
});

const revealItems=document.querySelectorAll('.benefits,.section,.about-layout,.contact-layout,.wide-cta,.footer,.cards article');
if('IntersectionObserver' in window&&!window.matchMedia('(prefers-reduced-motion: reduce)').matches){
  const revealObserver=new IntersectionObserver((entries,observer)=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  },{threshold:0.12});
  let cardIndex=0;
  revealItems.forEach(item=>{
    item.classList.add('reveal');
    if(item.matches('.cards article')) item.style.setProperty('--reveal-delay',`${(cardIndex++%3)*90}ms`);
    revealObserver.observe(item);
  });
}
const form=document.querySelector('#booking');if(form){form.addEventListener('submit',e=>{e.preventDefault();const d=new FormData(form);const body=`Hello Saint Cleaning Services, I would like to request a booking.%0AName: ${encodeURIComponent(d.get('name'))}%0APhone: ${encodeURIComponent(d.get('phone'))}%0AService: ${encodeURIComponent(d.get('service'))}%0APreferred date: ${encodeURIComponent(d.get('date')||'Flexible')}%0AArea: ${encodeURIComponent(d.get('area')||'Not specified')}%0ADetails: ${encodeURIComponent(d.get('details')||'Not specified')}`;window.open(`https://wa.me/2347070044176?text=${body}`,'_blank','noopener');});}

// Preselect a price-list item when the visitor clicks Request/Add.
const serviceDropdown = document.querySelector('select[name="service"]');
if (serviceDropdown) {
  const serviceKey = new URLSearchParams(location.search).get('service');
  const serviceChoice = {
    'single-room':'Single room cleaning — ₦8,000',
    'one-bedroom':'1-bedroom apartment — ₦15,000',
    'two-bedroom':'2-bedroom apartment — ₦25,000',
    'three-bedroom':'3-bedroom apartment — ₦35,000',
    'deep-one':'Deep cleaning — 1 bedroom — ₦25,000',
    'deep-two':'Deep cleaning — 2 bedrooms — ₦35,000',
    'move':'Move-in / move-out cleaning — from ₦25,000',
    'office':'Small office cleaning — from ₦20,000',
    'shortlet':'Short-let / Airbnb cleaning — from ₦12,000',
    'fridge':'Fridge cleaning — ₦5,000',
    'oven':'Oven cleaning — ₦5,000',
    'window':'Window cleaning — from ₦5,000',
    'kitchen-deep':'Kitchen deep cleaning — from ₦8,000',
    'bathroom':'Bathroom deep cleaning — from ₦5,000',
    'sofa-carpet':'Sofa and carpet cleaning — quotation required'
  };
  if (serviceKey && serviceChoice[serviceKey]) serviceDropdown.value = serviceChoice[serviceKey];
}
