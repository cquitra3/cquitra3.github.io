var posts=["2024/10/27/Unity3Djiaocheng1.1/","2025/04/05/math-teaching-1.1/","2025/03/15/math-teaching-preface/","2024/10/27/update0.93/","2024/11/10/update0.95/","2024/12/08/update1.00/","2025/03/22/update1.21/","2025/04/12/update1.30/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };