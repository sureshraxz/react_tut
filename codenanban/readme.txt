https://stackoverflow.com/questions/2765421/how-do-i-push-a-new-local-branch-to-a-remote-git-repository-and-track-it-too
https://stackoverflow.com/questions/65173291/git-push-error-src-refspec-main-does-not-match-any-on-linux
https://stackoverflow.com/questions/23865977/fatal-not-a-valid-object-name-master-when-creating-a-new-branch-in-git
https://stackoverflow.com/questions/60660765/error-failed-to-push-some-refs-to-https-github-com

s1:
$ git init
Initialized empty Git repository in C:/Shades/web Dev/Frontend/framework/react/.git/

s2:
$ git remote add origin https://github.com/sureshraxz/react_tut.git

s3:
git push -u origin 
Err1:
fatal: The current branch master has no upstream branch.      
To push the current branch and set the remote as upstream, use

    git push --set-upstream origin master
Err2:
$ git push --set-upstream origin master
error: src refspec master does not match any
error: failed to push some refs to 'https://github.com/sureshraxz/react_tut.git'

Err3:
$ git push -u origin main
error: src refspec main does not match any
error: failed to push some refs to 'https://github.com/sureshraxz/react_tut.git'

Solution:
Error: git init -> git remote add ... -> git push -u origin master --> error: failed to push some refs to 'https://github.com/sureshraxz/react_tut.git'
Working:  git init -> git remote add ... --> git add --> git commit -m 'initial commit mandatory' --> git push -u origin master --> 😁
# commitment mukiyam bigulu
