# progress-wiget

> A Vue.js project

## Intro
Welcome! to the EN progress widget demo, a sandbox where we've ironed out the issues in the enrollment process for the EN employee app.  Our goal, to get users to finish their damn forms so their HR representatives don't have to bother them for months.  Our solution:  a 'progress widget' that will control the user's navigation while in the enrollment flow, while also clueing them in to how many more forms need to be filled out.

## Required Format
In order to be properly integrated into the EN Employee App, the project was required to:
  1. Recieve a ist of forms in JSON at startup
  2. Controll routing programmatically
  3. Use componnent based architecture, so that the Progress Widget would not reload when a new form loads
  4. Use the Vuex store to communicate between components
  5. Incentivise the user to FINISH ENROLLMENT NOW!
  6. Be mobile friendly
  7.  Be IE9 compliant because apparently a lot of old people use our system


## Design Evolution - Progress Bar

Attempt 1:  Direct translation from the previous 4 sections of the enrollment process
![](https://user-images.githubusercontent.com/17132962/45648824-a07a5580-ba97-11e8-9933-3596ca50e311.png)


After deciding that we needed to make the clickability of the categories immediately apparent, we shifted some things around and ended up on...

Attempt 2: dig ourselves out of this hole
![](https://user-images.githubusercontent.com/17132962/45648827-a1ab8280-ba97-11e8-8de1-1a8f5d14f3c2.png)

It became very apparent very quickly that we had been complicating things unnecessarily, we decided to take a step back in an attempt to simplify things.

What followed was the realization that having different lists for each of the enrollment sections was, in a word, stupid.  So we got rid of the separate sections and found ourselves at:

Attempt 3: Halfway there
![](https://user-images.githubusercontent.com/17132962/45648831-a40ddc80-ba97-11e8-8bfc-1b54d0f0b0c6.png)

The final iteration of the project was the most important, as it was a change to the most basic aspect of the progress bar itself. (The Progress bar itself)  After asking "Why is the enrollment process split into 4 sections in the first place,"  and finding out that the answer was essentially "because...", we rid ourselves of the 4 section approach in the first place and found ourselves at

Attempt 4:  A finished product
![](https://user-images.githubusercontent.com/17132962/45648821-9ce6ce80-ba97-11e8-8312-9ea1fd82f3a8.png)



## Design Evolution - Page Design
*"supplimental information not pictured*
The page design we decided on was a simple two column design.  The left 2/3 of the page would be devouted to the form and requisite white space, while the right 1/3 of the page would be left for the Progress bar and the supplimental information that would be inserted below.


![](https://user-images.githubusercontent.com/17132962/45650378-1bde0600-ba9c-11e8-8654-6cd3c14b5374.PNG)


For medium screens (tiny laptops and large tablets) we decided to quickly jump to a single column format and float the progress bar above the form while moving the supplimental information below the form.


![](https://user-images.githubusercontent.com/17132962/45650379-1bde0600-ba9c-11e8-9bd0-5e5e635c052b.PNG)


Finally, for mobile devices we expanded the progress bar to fill the screen, which we decided against in the previous category as it left a hideous ammount of white space within the progress bar when its glossary was expanded

![](https://user-images.githubusercontent.com/17132962/45650380-1bde0600-ba9c-11e8-9625-8b1e018ef008.PNG)


##  Application Tour

 Our story begins a long time ago, in a folder not so far away... 
(src/assets/mockData.json)

The 'progress widget' is passed varying list of forms, depending on things like:  number of dependants, coverage level, whether or not forms have been completed already etc
The form is then imported in /App.Vue
(check out that file to see what happens next)

