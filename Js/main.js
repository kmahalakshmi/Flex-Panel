var panels = document.querySelectorAll('.panel');

function panelopen()
{

	this.classList.toggle('open');
}
function panelactive(e)
{
	this.classList.remove('open');
	if(e.propertyName.includes('flex'))
	{

	this.classList.toggle('panel_openactive');
}
}

panels.forEach(panel => panel.addEventListener('click',panelopen));
panels.forEach(panel => panel.addEventListener('transitionend',panelactive));