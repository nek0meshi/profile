.PHONY: yarn
yarn:
	cd frontend && yarn && yarn dev

.PHONY: generate-gh-pages
generate-gh-pages:
	cd frontend && yarn && yarn generate:gh-pages

.PHONY: create-project
create-project:
	docker run \
		--rm \
		--volume $(PWD):/work:cached \
		--workdir /work \
		-it \
		node:14-alpine \
		yarn create nuxt-app frontend
