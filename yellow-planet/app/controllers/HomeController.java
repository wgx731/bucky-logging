package controllers;

import play.mvc.*;
import play.Logger;

import java.util.UUID;

/**
 * This controller contains an action to handle HTTP requests
 * to the application's home page.
 */
public class HomeController extends Controller {

    /**
     * An action that renders an HTML page with a welcome message.
     * The configuration in the <code>routes</code> file means that
     * this method will be called when the application receives a
     * <code>GET</code> request with a path of <code>/</code>.
     */
    public Result index() {
        return ok(views.html.index.render());
    }

    public Result yellow() {
        Logger.info("id: {}, path: /yellow", UUID.randomUUID());
        return ok("willy-nerd");
    }

    public Result error() {
        Logger.error("id: {}, path: /error", UUID.randomUUID());
        return internalServerError("error");
    }

}
