---
title: "Creating a serverless blog using Hugo and S3 (with CI/CD)"
date: 2019-04-29T11:11:36+01:00
draft: false
---

I've been interested in serverless in a big way lately. Thus having become fed up with the amount of infrastructure required by Wordpress , when all I want is a very simple blog... I decided to try my hand at creating a serverless option.

If you're after a simple website, such as a portfolio or simple one-person blog, this could be the solution for you!

## Tools used:
- [Hugo](https://gohugo.io)
- [AWS S3 Bucket](https://aws.amazon.com/s3/)
- [Travis CI](https://travis-ci.org)

## Steps

### Creating the website
Follow the [quick start guide](https://gohugo.io/getting-started/quick-start/) to create a new site using Hugo. This contains all the steps you need to get to a point where you are running the site locally (it really is impressively easy!).

### Deploying the website
#### Hosting
I created an S3 bucket with static-website hosting enabled. This is a really cheap, performant and reliable way of hosting a static website in AWS.
I then created the Route 53 record, which was an A record aliased to the S3 bucket. 

#### Automated deployment
I hooked up my github repository for the project to Travis CI, which is free, but I'm sure there are other free solutions that can do the job.

It was my first time using Travis, so my .yml file isn't the best, but you can find it in this websites [github repo](https://github.com/Harrtron/harleythorne.com).

To summarise, I created scripts to install Hugo and AWS CLI tools on the Travis build instance, and then a very simple one-liner syncs the static website to the s3 bucket upon building. So it's nice and automated. 😊