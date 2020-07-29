#!bin/bash

## https://www.conventionalcommits.org/en/v1.0.0/#specification
## THe type feat MUST be used when a commit adds a new feature to your application or library.


optsFunction() {
   echo ""
   echo "Usage: $0 -t title -d description"
   echo "\t-t Description of title"
   echo "\t-d Description of breaking change"
   exit 1 # Exit script after printing help
}

# Read the parameter and set the variables if everything it's fine
while getopts "t:d:" opt
do
   case "$opt" in
      t ) TITLE="$OPTARG" ;; # Title for commit
      d ) DESCRIPTION="$OPTARG" ;; # Description of commit
      ? ) optsFunction ;; # Print optsFunction in case parameter is not valid
   esac
done

# Print optsFunction in case TITLE are empty
if [ -z "$TITLE" ]
then
   echo "You cannot left the TITLE empty";
   optsFunction
fi

# Print optsFunction in case DESCRIPTION are empty
if [ -z "$DESCRIPTION" ]
then
   echo "You cannot left the DESCRIPTION empty";
   optsFunction
fi

# Begin script in case all parameters are correct
echo "print all files on tree"
git status

echo "adding all files"
git add -A

echo "adding messages to commit"
git commit -m "feat: $TITLE" -m "BREAKING CHANGE: $DESCRIPTION"

echo "push to github"
git push