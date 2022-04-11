git add -A && git commit -m "Your Message"

count as a "single command"?
Edit based on @thefinnomenon's answer below

To have it as a git alias, use:

git config --global alias.coa "!git add -A && git commit -m"

and commit all files, including new files, with a message with:

git coa "A bunch of horrible changes"

Explanation

From git add documentation:

    -A, --all, --no-ignore-removal

    Update the index not only where the working tree has a file matching but also where the index already has an entry. This adds, modifies, and removes index entries to match the working tree.

    If no <pathspec> is given when -A option is used, all files in the entire working tree are updated (old versions of Git used to limit the update to the current directory and its subdirectories).

