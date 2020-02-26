# need brew install protobuf

PROTOBUF_SRCDIR=../protobuf
PLUGIN_TS=./node_modules/.bin/protoc-gen-ts
PLUGIN_GRPC=./node_modules/.bin/grpc_tools_node_protoc_plugin
DIST_DIR=./src/protos


protoc \
--proto_path="${PROTOBUF_SRCDIR}"/ \
--js_out=import_style=commonjs,binary:"${DIST_DIR}"/ \
--ts_out=import_style=commonjs,binary:"${DIST_DIR}"/ \
--grpc_out="${DIST_DIR}"/ \
--plugin=protoc-gen-grpc="${PLUGIN_GRPC}" \
--plugin=protoc-gen-ts="${PLUGIN_TS}" \
-I $DIST_DIR \
"${PROTOBUF_SRCDIR}"/*.proto
