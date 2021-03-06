/*!
 * Copyright 2010 - 2017 Hitachi Vantara. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
define([
  "pentaho/i18n!messages"
], function(bundle) {

  "use strict";

  return ["string", "enum", function(PentahoString, Enum) {

    /**
     * @name pentaho.visual.role.Aggregation
     * @class
     * @extends pentaho.type.String
     * @extends pentaho.type.mixins.DiscreteDomain
     *
     * @amd {pentaho.type.spec.UTypeModule<pentaho.visual.role.Aggregation>} pentaho/visual/role/aggregation
     *
     * @classDesc The `Aggregation` class is [String]{@link pentaho.type.String} based enumeration
     * that represents an **aggregation** operation.
     *
     * Currently, the following aggregations are supported:
     *
     * * `sum` - Sum (applicable to numeric types)
     * * `avg` - Average (applicable to numeric types)
     * * `min` - Minimum (applicable to ordinal types)
     * * `max` - Maximum (applicable to ordinal types)
     * * `mode` - Mode (applicable to any type)
     */
    return PentahoString.extend({
      $type: {
        mixins: [Enum],
        domain: ["sum", "avg", "min", "max", "first", "last"]
      }
    })
    .implement({$type: bundle.structured.aggregation});
  }];
});
