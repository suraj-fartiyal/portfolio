# Walkthrough: How to Host Your Portfolio on GitHub Pages

This guide walks you through the steps of creating a remote repository on GitHub, uploading your new portfolio code, and enabling free web hosting via GitHub Pages.

---

## Prerequisites
1. You must have a GitHub account. If you don't, create one at [github.com](https://github.com).
2. Git must be configured on your machine. (We verified that Git is installed and configured with your name and email!).

---

## Step 1: Create a New Repository on GitHub
1. Open your browser and log in to [github.com](https://github.com).
2. Click the **`+`** icon in the top right corner of the page and select **New repository** (or go to [github.com/new](https://github.com/new)).
3. Fill in the repository details:
   - **Repository name**: `portfolio` (or any name you prefer, such as `suraj-singh-qa`).
   - **Description** (optional): `My Senior QA Automation Engineer Portfolio Website.`
   - **Public/Private**: Select **Public** (this is required to use GitHub Pages on a free account).
   - **Do NOT initialize the repository** with a README, `.gitignore`, or License. (We have already initialized it locally!).
4. Click **Create repository**.

---

## Step 2: Link Your Local Code to GitHub
After creating the repository, GitHub will show you a page with setup commands. Look for the section titled **"…or push an existing repository from the command line"**.

1. Copy the commands from that section. They will look like this:
   ```bash
   git remote add origin https://github.com/suraj-fartiyal/portfolio.git
   git push -u origin main
   ```
2. Open your terminal/command prompt, make sure you are in the `C:\Users\Dell\suraj-portfolio` directory, and paste/run those commands.
   > [!NOTE]
   > You can copy and paste the commands directly in your terminal. If prompted, log in to your GitHub account to authenticate the push.

---

## Step 3: Enable GitHub Pages
Once your code is pushed successfully to GitHub, enable hosting:

1. In your GitHub repository page, click the **Settings** tab (the gear icon at the top of the repository page).
2. On the left sidebar, under the **Code and automation** section, click on **Pages**.
3. Under the **Build and deployment** section:
   - **Source**: Select **Deploy from a branch** (default).
   - **Branch**: Click the dropdown (currently says `None`), select **`main`**, and leave the folder as **`/ (root)`**.
   - Click the **Save** button.

---

## Step 4: Access Your Live Portfolio!
1. After clicking Save, GitHub will start building your site. This takes about 1-2 minutes.
2. Refresh the **Pages** settings page. At the top, you will see a banner stating:
   > **Your site is live at `https://suraj-fartiyal.github.io/portfolio/`**
3. Click the link to view your live, premium, interactive portfolio website!

---

> [!TIP]
> ### How to Update Your Portfolio in the Future
> Whenever you make edits to `index.html`, `style.css`, or `script.js` and want to publish them live, run these terminal commands inside `C:\Users\Dell\suraj-portfolio`:
> ```bash
> git add .
> git commit -m "Update portfolio details"
> git push origin main
> ```
> GitHub will automatically rebuild and deploy your changes within a minute.
