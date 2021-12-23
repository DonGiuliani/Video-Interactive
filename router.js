function goToRoute(page) {

    let controller = new Controller;

    switch(page) {
        case "viewVideo":
            controller.renderVideos()
            break;
            
        default : 
        //controller.renderErrorPage
    }
}

goToRoute("viewVideo");