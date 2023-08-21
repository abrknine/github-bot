/**
 * This is the main entrypoint to your Probot app
 * @param {import('probot').Probot} app
 */
module.exports = (app) => {
  // Your code here
  app.log.info("Yay, the app was loaded!");

   app.on("issues.opened", async (context) => {
     const issueComment = context.issue({
       body: "Thanks for opening this issue!",
     });
     return context.octokit.issues.createComment(issueComment);
   });
  // app.on('pull_request.closed', async (context) => {
  //   const { owner, repo } = context.repo();
  //   const { number: pullNumber } = context.payload.pull_request;

  //   try {
  //     // Get the pull request details
  //     const { data: pullRequest } = await context.github.pulls.get({ owner, repo, pull_number: pullNumber });

  //     // Get the commit details
  //     const { data: commit } = await context.github.repos.getCommit({ owner, repo, ref: pullRequest.head.sha });

  //     // Get the tree details of the commit
  //     const { data: tree } = await context.github.git.getTree({ owner, repo, tree_sha: commit.commit.tree.sha, recursive: true });

  //     // Retrieve the code of the first file in the commit's tree
  //     const fileSHA = tree.tree[0].sha;
  //     const { data: file } = await context.github.git.getBlob({ owner, repo, file_sha: fileSHA });

  //     // Handle the code as per your requirements
  //     const codeContent = Buffer.from(file.content, 'base64').toString();
  //     console.log(codeContent);
  //   } catch (error) {
  //     console.error('Error retrieving code:', error);
  //   }
  // });


};
