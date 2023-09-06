# React App Plan - nc-news

## <ins>Endpoints:</ins>

### GET:

- <ins>/api:</ins> description of all endpoints - likely not needed
- <ins>/api/topics:</ins> returns all the available topics for all articles - can be useful for navbar/ categorisation
- <ins>/api/articles:</ins> returns all the articles from the api. Useful when doing searches, or for home page feed
- <ins>/api/articles/:article_id:</ins> returns a specific article - can be useful when a particular article is referenced (i.e. clicking on a result from /api/articles)
- /api/articles/:article_id/comments: returns all comments for the corresponding article - could (and probably should) be used in conjunction with the one above; display a specific article and its comments to the user simultaneously.
- /api/users:  returns all users - should be used for authentication, specifically when registering to check if that user already exists
- /api/users/:username: returns a specific user - best use case is going to be for user login (linked to user context)

### POST:

- <ins>/api/articles/:article_id/comments:</ins> adds a comment for an article - handy when clicking on a specific article, so a user can not only see comments but also add their own.
- <ins>/api/articles:</ins> adds a new article to the site - allows users to make their own posts, ideally from the home page where the feed is displaying (optimistic rendering to make it seem at top).
- <ins>/api/topics:</ins>  adds a topic to the site if it doesn't aalready exist; used in conjunction with the corresponding get method in order to check if the category already exists or not.

### PATCH:

- <ins>/api/articles/:article_id:</ins> increments votes on an article - user should be able to upvote an article, thus incrementing it by 1 (use optimistic rendering)
- <ins>/api/comments/:comment_id:</ins> increments votes on a comment - user should be able to upvote a comment, thus incrementing it by 1 (use optimistic rendering)

### DELETE:

- <ins>/api/comments/:comment_id:</ins> allows a user to delete their own comment
- <ins>/api/articles/:article_id:</ins> allows a user to delete their own article, as well as all associated comments

## <ins>API</ins>

- access to 4 different categories of data; users, articles, comments and topics.
- users contains all user information; username, avatar\_img\_url, and name. This is useful when doing authentication, but also keeps comments and articles back to the original user who posted them
- articles contains data about all articles; article\_id, author, title, body, topic, created\_at, votes, article\_img\_url, with author and topic being foreign key references to username and slug from users and topics, respectively.
- topics contains data about all available categories, aswell as a brief description; slug, description. the slug is referenced as topic by article, and any topic passed to article should exist here and be checked.
- comments contains data about all the comments on the site (under each article); comment\_id, body, article\_id, author, votes, created\_at, where article\_id and author are references to articles and users (username) respectively.
- Summary: users contains all user info, which is necessary in order to have articles and comments associated with an author; topics, from which articles must pick a valid category to post about; articles which is the bulk of the data, and responsible for providing us the content, where users can make posts on topics of their interest; and comments, where other users will be able to respond to the original article posted by a user, by referencing the article
- Here's how we use each of these of the frontend: users is for authentication, and will automatically assign author to articles and comments; topics will allow us to form a small navbar above the feed, allowing users to essentially filter posts in their feed - users also assign this when making their own article posts; articles will build up the main feed, and will provide our user with search results, also users will be able to create their own; comments will display under a specific article, when it is accessed/ clicked on - users will also be able to add their own to the discussion here.

## <ins>Project Structure</ins>

- Main components: header, navbar, search bar, sort, footer
- navbar: drop down menu showing categories (max 5); has option for 'show more', which will take to new page
- home page: feed (main), create button
- login page: login user, register button (changes form to include name (mandatory), and avatar\_img\_url (optional)
- categories (after clicking on navbar): article feed (main), toggle for comments feed (views article topic with the most upvoted comment)
- search (after typing in a search query): will give an article feed
- article (after clicking on a particular card): img, body, title, and all comments listed under it (need pagination on backend to control the number of visible comments)
- keep http queries and backend communication in a seperate utils/api folder to keep code dry and prevent repeating yourself
- inspired styling from reddit; mobile first development (flexbox); majority of the page is going to be occupied by articles and/ or comments feed, with scroll functionality (pagination to change page and view different content.

## <ins>Routing</ins>

- <ins>/:</ins> home page - main components + home page and create button beside the navbar
- <ins>/categories:</ins> displays all category names; accessed from navbar dropdown menu 'show all' option
- <ins>/articles/:category_name:</ins> displays all articles for a specified category
- <ins>/authenticate:</ins> user login/ register page (register toggle changes form layout but same form (implement login only intially, and set up password later - just username)
- <ins>/articles:</ins> although this endpoint on its own won't be used much on its own, its still how the route is going to be accessed, as we dont write the query inside the Route elements. If a search is made without specifying anything into the search, it will be just this (have a placeholder 'click to search all articles' in order to indicate this to the user).
- <ins>/articles?search:</ins> when clicking on search, brings up articles matching search query (string); also option to click on categories and comments from there to search them instead (implement the latter later on)
- <ins>/articles/comments?search:</ins> lists the most upvoted comments for articles matching the sort criteria above.
- <ins>/categories?search:</ins> after searching articles, you can click here to search matching categories instead, which, after clicking on, you can access articles by category, like from the navbar - except you were able to search for the category you needed.
- <ins>/articles/:article_id:</ins> gives access to comments under a corresponding article, as well as the article itself.

## <ins>Data</ins>

- most data will be provided from the backend, however some operations will need to be performed on the frontend.
- **authentication:** since this feature is not available on our backend, we will need to hardcode a login user. This should use the User Context. Initially, do login with no password; implement a register and password later on
- **search:** since our backend doesn't support filtering based on a string query match, we will need to implement this on the frontend by getting all articles, then finding a match after using regex.
- **categories:** since categories dont have any filtering at all, we will need to do the same as above for this
- for **login/register** we use /api/users/:username to check if user exists.
- when a user is **posting an article or comment**, they must be signed in, but also if they are then they will be assigned to the author property. Later on, we can add functionality to click on a user to access all their posts. post requests will be made to put up the article/ comment.
- a user can **delete** any of their posts as long as the logged in user matches the author name (conditional logic using user context).

## <ins>Extras</ins>

- implement optimistic rendering to give immediate feedback to upvotes, and to display user comments/ posts at top when theyve been posted.
- complete authentication functionality with password auth, which should be managed on the frontend.
- extra UI features such as responsive touches and smooth loading screens to keep user experience maxed out an engaged.
- Footer: displays pg. no, total, results. Gives buttons to navigate to next/ previous page (pagination).