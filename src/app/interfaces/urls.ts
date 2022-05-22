export class Urls{
    constructor(){}
    urls = {
        get : `${document.location.protocol}//${document.location.hostname}/api/get.php`,
        post : `${document.location.protocol}//${document.location.hostname}/api/post.php`,
        login : `${document.location.protocol}//${document.location.hostname}/api/login.php`
    }
    
}