# Simple Docker, Terraform and AWS deployment

## Introduction

Basic Node.js application was taken as an example and deployed to AWS using Terraform. The node.js application is deployed in a scalable way.


Load balancing Node.js application will be done using Nginx.



## Docker Compose

Docker compose configuration file docker-compose.yml contains two containers. One is Node.js container and another is Nginx container. Nginx container has the link to the Node.js container, this will give network access to web container and also injects hosts names.


docker-compose up -d --scale web=2

## AWS Deployment

Create AWS key pairs. We will use it to ssh to aws instance. All other stuff will be created by Terraform.

Get public key
ssh-keygen -y -f KEYPAIR.pem

Export environment variables.

$ export AWS_ACCESS_KEY_ID="DEMO ACCESS"
$ export AWS_SECRET_ACCESS_KEY="DEMO SECRET"
$ export AWS_DEFAULT_REGION="REGION TO HOST"

## nginx to syslog
open nginx.conf and change the syslog server to point to actual one.
i.e access_log syslog:server=[2001:db8::1]:1234,facility=local7,tag=nginx,severity=info;

# Environment variables 
open Dockerfile of app and edit ES_ENDPOINT, REDIS_ENDPOINT AND MYSQL_CONN_STR.

## Terraform

The script will create all necessary part of AWS infrastructure VPC, subnet, and security group. We are using only one small t2.micro. 


$ terraform plan
$ terraform apply
