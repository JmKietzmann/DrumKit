var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i=0 ; i < numberOfDrumButtons ; i++ ) {
    document.querySelectorAll(".drum")[i].addListenerEvent("click", function(){alert("this button has been clicked");})
};
