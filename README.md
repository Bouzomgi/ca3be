# Chat App v3 Backend

To locally build Docker image and run it
`docker build -t be .`
`docker run -p 4000:4000 be`

Regarding env vars, some (public) will be passed in directly via the CDK
the others (private) will be passed in via AWS SSM during the CDK synth.
This will be labeled on the config.

## NOTES

- Write a basic route to add something to the DB
- Test CICD
- Try to get it connected to RDS

  - Using AWS Secrets Manager? Or Github environment files? Dunno how this will work

  compile time: docker
  runtime: ssm in cloudformation

- Revisit cors
  can i get both of them in ECR??

  where store env vars? (deployment relevant)
  or SSM / Hashicorp Vault? Do people just store all of them in there?
  how get them into docker containers? Use envfile?

  wanna look into ansible

  want git to have its own .env!
