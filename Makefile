.PHONY: dev
dev:
	cd v2 && yarn && yarn dev

.PHONY: lint
lint:
	cd v2 && yarn && yarn lint

.PHONY: generate
generate:
	rm -rf docs
	cd v2 && yarn && yarn generate
	cd v1 && make generate-gh-pages
