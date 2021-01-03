## Methods Matter

Have you ever wondered what the outcome of US elections would be if they didn't use the winner takes all seats approach? Specially after the 2016 election it was evident that the current method wasn't the most representative, after Hillary Clinton won the popular vote by nearly 3 million votes but failed to win the election.

**Method Matter** is an attempt to estimate the outcome of US elections from 1976 to 2016 if other common methods of seat allocation were used instead like the D'Hondt method or the Largest Remainder method. 

The goal is to explore how these different methods can greatly influence the outcome of an election. Are they prone to form coalitions? Do they favor smaller or larger parties? How representative are they?  

It is however important to note that the results obtained are by no means facts, since both candidates and voters would change their strategy depending on how the elections work.
  
### Sources

Most of the data regarding the elections came from the [MIT Election Data + Science Lab](https://dataverse.harvard.edu/dataset.xhtml?persistentId=doi:10.7910/DVN/42MVDX) dataset.

Information regarding the number of electoral votes each state was conceded in the election years between 1976 and 2016 was taken from [270toWin](https://www.270towin.com/state-electoral-vote-history/).

Information about each method was mostly gathered from Wikipedia and some papers. They can be found in the explanation of each method in the More Information section (on the website).

### Technology

This project is built with React and bootstrapped with [Create React App](https://github.com/facebook/create-react-app) with [Sass](https://sass-lang.com/) to help with the CSS.  
To get the Wikipedia pages of each candidate, calls to the Wikipedia API are made using the [wikijs](https://github.com/dijs/wiki) package.  
The US map representation is made possible using the [react-usa-map](https://github.com/gabidavila/react-usa-map) package.  
The website is currently hosted on [Netlify](https://www.netlify.com).

### Contacts

If you encounter any bugs or want to request some feature feel free to open an issue on this repository!