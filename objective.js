const images=document.querySelectorAll('img');images.forEach((image)=>{image.addEventListener('load',function(){const width=this.width;const height=this.height;if(width&&height){this.setAttribute('width',width);this.setAttribute('height',height)}})});const containers=document.querySelectorAll('div, article');containers.forEach((container)=>{const images=container.querySelectorAll('img');images.forEach((image)=>{if(!image.alt){const closestHeading=findClosestHeading(image);if(closestHeading){image.alt=closestHeading.innerText}}})});function findClosestHeading(element){let parent=element.parentElement;while(parent){const heading=parent.querySelector('h1, h2, h3, h4, h5, h6');if(heading){return heading} parent=parent.parentElement} return null}
