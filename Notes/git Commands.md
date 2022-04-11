

It is quite simple. You need to add the changes that you want to the index first:

git add file1 file2

then

git commit

if you removed a file, the add does that. Add means "add the change" even though it is a removal.

If you want to add all changes:

git add -A

The -a parameter on commit says to add all changes of tracked files and commit them. So

git commit -a

will not commit a new file you created. You must explicitly add this.

The -m parameter allows you to avoid opening the editor to edit your commit message and use what you put in following the -m option:

git commit -m "Use this message and don't open the editor"

Sometimes this is not a good idea. If you just tried a merge and had conflicts, git caches a very nice message for you once you resolve the conflicts and commit. So there a git commit is better.

To selectively add files, use the patch modifier on git add:

git add -p

This will now prompt you about the files. This is quite powerful as you can also specify parts of files, or alternatively edit what you want to add to the index. A git commit will only add those.

If you want some gui help that is not tortoisegit (avoid windows shell integration), use git gui.