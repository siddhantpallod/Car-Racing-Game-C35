class Form{
    constructor(){

    }

    display(){
        var title = createElement('h2');
        title.html("Multiplayer Car Racing Game");
        title.position(350,100);
        
        var input = createInput("Name");
        input.position(400,250);

        var button = createButton("Start");
        button.position(500,300);

        var greeting = createElement('h3');

        button.mousePressed(function(){
            input.hide();
            button.hide();

            var name = input.value();
            playerCount = playerCount + 1;
            player.update(name);
            player.updateCount(playerCount);

            greeting.html("Welcome " + name);
            greeting.position(400,200);
        })
    }

}


