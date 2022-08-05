const men = document.getElementById('men');
const women = document.getElementById('women');
const kids = document.getElementById('kids');
const home = document.getElementById('home')
const beauty = document.getElementById('beauty')
const menBtn = document.getElementById('menBtn');
const womenBtn = document.getElementById('womenBtn');
const kidsBtn = document.getElementById('kidsBtn');
const homeBtn = document.getElementById('homeBtn')
const beautyBtn = document.getElementById('beautyBtn')
const studio = document.getElementById('studio');
const studioBtn = document.getElementById('studioBtn');
const patent = document.getElementById('parent')
const flat = document.getElementById('flat');
const f = document.getElementById('f');
f.addEventListener('click', () => {
	flat.style.left = '57vw';
})
flat.addEventListener('click',()=>{
	flat.style.left='-99vw';
})
men.style.display = 'none';
women.style.display = 'none';
kids.style.display = 'none';
home.style.display = 'none';
beauty.style.display = 'none';
studio.style.display = 'none';
menBtn.addEventListener('mouseover', () => {
	studio.style.display = 'none';
	men.style.display = 'block';
	patent.style.opacity = 0.8;
})
men.addEventListener('mouseleave', () => {
	men.style.display = 'none';
	patent.style.opacity =
		patent.style.opacity = 1;
	1;

})
womenBtn.addEventListener('mouseover', () => {
	patent.style.opacity = 0.8;

	studio.style.display = 'none';
	women.style.display = 'block';
})
women.addEventListener('mouseleave', () => {
	patent.style.opacity = 1;

	women.style.display = 'none';
})
kidsBtn.addEventListener('mouseover', () => {
	patent.style.opacity = 0.8;

	studio.style.display = 'none';
	kids.style.display = 'block';

})
kids.addEventListener('mouseleave', () => {
	patent.style.opacity = 1;

	kids.style.display = 'none';

})
homeBtn.addEventListener('mouseover', () => {
	patent.style.opacity = 0.8;

	studio.style.display = 'none';
	home.style.display = 'block';

})
home.addEventListener('mouseleave', () => {
	patent.style.opacity = 1;

	home.style.display = 'none';

})
beautyBtn.addEventListener('mouseover', () => {
	patent.style.opacity = 0.8;

	beauty.style.display = 'block';
	studio.style.display = 'none';

})
beauty.addEventListener('mouseleave', () => {
	patent.style.opacity = 1;

	beauty.style.display = 'none';

})
studioBtn.addEventListener('mouseover', () => {
	patent.style.opacity = 0.8;

	beauty.style.display = 'none';
	men.style.display = 'none';
	women.style.display = 'none';
	home.style.display = 'none';
	kids.style.display = 'none';
	studio.style.display = 'block';

})
studio.addEventListener('mouseleave', () => {
	patent.style.opacity = 1;

	studio.style.display = 'none';

})
