# how to setup docs folder?


### go to docs folder 

```bash
cd docs
```


### create virtualenv and activate it

```bash
virtualenv venv && activation command
```


### install all dependencies 

```bash
pip install -r requirements.txt
```


### how to setup packages folder?

### go to root folder (geoserve)


### install all packages with this command

```bash
pnpm i --filter '!docs'
```

> Congrats !! All setup done. Now it's time to run docs and packages
> We need one command to run everything simulatenously


# dev command will run all folder (docs and geoservex)

```bash
pnpm dev
```


# build command will build all folder (docs and geoservex)

```bash
pnpm build
```