'use strict';
(() => {
  var exports = {};
  exports.id = 116;
  exports.ids = [116];
  exports.modules = {
    /***/ 5616: /***/ (module) => {
      module.exports = import('next-connect');

      /***/
    },

    /***/ 2497: /***/ (module, __webpack_exports__, __webpack_require__) => {
      __webpack_require__.a(
        module,
        async (
          __webpack_handle_async_dependencies__,
          __webpack_async_result__,
        ) => {
          try {
            __webpack_require__.r(__webpack_exports__);
            /* harmony export */ __webpack_require__.d(__webpack_exports__, {
              /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
              /* harmony export */
            });
            /* harmony import */ var next_connect__WEBPACK_IMPORTED_MODULE_0__ =
              __webpack_require__(5616);
            /* harmony import */ var server_controller_links__WEBPACK_IMPORTED_MODULE_1__ =
              __webpack_require__(2925);
            var __webpack_async_dependencies__ =
              __webpack_handle_async_dependencies__([
                next_connect__WEBPACK_IMPORTED_MODULE_0__,
              ]);
            next_connect__WEBPACK_IMPORTED_MODULE_0__ = (
              __webpack_async_dependencies__.then
                ? (await __webpack_async_dependencies__)()
                : __webpack_async_dependencies__
            )[0];
            // Next.js API route support: https://nextjs.org/docs/api-routes/introduction

            const handler = (0,
            next_connect__WEBPACK_IMPORTED_MODULE_0__['default'])({
              onError: (err, req, res, next) => {
                console.error(err.stack);
                res.status(500).end('Error!');
              },
              onNoMatch: (req, res) => {
                res.status(404).end('Not found');
              },
            });
            handler
              .get(
                server_controller_links__WEBPACK_IMPORTED_MODULE_1__ /* .handleGet */.B,
              )
              .post(
                server_controller_links__WEBPACK_IMPORTED_MODULE_1__ /* .handlePost */.t,
              );
            /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
              handler;

            __webpack_async_result__();
          } catch (e) {
            __webpack_async_result__(e);
          }
        },
      );

      /***/
    },

    /***/ 2925: /***/ (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__,
    ) => {
      // EXPORTS
      __webpack_require__.d(__webpack_exports__, {
        B: () => /* binding */ handleGet,
        t: () => /* binding */ handlePost,
      }); // CONCATENATED MODULE: external "mongodb"

      const external_mongodb_namespaceObject = require('mongodb'); // CONCATENATED MODULE: ./server/libs/db/client.ts
      // https://docs.atlas.mongodb.com/best-practices-connecting-from-vercel/
      // NOTE
      // 기존에 사용하던 DB API 방식은 77132084ab0524f7df42ca880e83f2df31e7b887에서 지워짐

      const uri = process.env.DB_URL;
      const options = {};
      let client;
      let clientPromise;
      if (false) {
      } else {
        // In production mode, it's best to not use a global variable.
        client = new external_mongodb_namespaceObject.MongoClient(uri, options);
        clientPromise = client.connect();
      }
      const ObjectId = external_mongodb_namespaceObject.ObjectId;
      // Export a module-scoped MongoClient promise. By doing this in a
      // separate module, the client can be shared across functions.
      /* harmony default export */ const db_client = clientPromise; // CONCATENATED MODULE: ./server/controller/links/index.ts

      const handleGet = async (req, res) => {
        const { id } = req.query;
        const client = await db_client;
        const document = await client
          .db()
          .collection('links')
          .findOne(
            {
              _id: new ObjectId(id),
            },
            {
              projection: {
                _id: 0,
              },
            },
          );
        if (!document) {
          return res.status(404).json({
            success: false,
          });
        }
        return res.status(200).json({
          success: true,
          data: document,
        });
      };
      const handlePost = async (req, res) => {
        const { url, contents, correct } = req.body;
        const client = await db_client;
        const { insertedId } = await client.db().collection('links').insertOne({
          url,
          contents,
          correct,
          createdAt: Date.now(),
        });
        if (!insertedId) {
          return res.status(404).json({
            success: false,
          });
        }
        return res.status(200).json({
          success: true,
          data: insertedId,
        });
      };

      /***/
    },
  };
  // load runtime
  var __webpack_require__ = require('../../webpack-api-runtime.js');
  __webpack_require__.C(exports);
  var __webpack_exec__ = (moduleId) =>
    __webpack_require__((__webpack_require__.s = moduleId));
  var __webpack_exports__ = __webpack_exec__(2497);
  module.exports = __webpack_exports__;
})();
