

<script>
export default {
    name: 'SkeletonLoader',
    components: {},
    props: {
        isVisible: {
            type: Boolean,
            default: true
        },
        skeletonType: {
            type: String,
            default: 'heading'
        }
    },
    computed: {
        rootTypes () {
            return {
                text: 'text',
                heading: 'heading',
                paragraph: 'text@3',
                sentences: 'text@2',
                article: 'heading, paragraph'
            };
        },
        attrs () {
            return {
                'data-test-id': 'skeletonLoader',
                'aria-busy': true,
                'aria-live': 'polite',
                role: 'alert',
                ...this.$attrs
            };
        }
    },
    methods: {

        genBone (boneName, children) {
            return this.$createElement(
                'div',
                {
                    staticClass: `${this.$style[`c-skeleton-loader-${boneName}`]} ${this.$style['c-skeleton-loader-bone']}`
                },
                children
            );
        },

        genBones (bone) {
            // e.g. 'text@3'
            const [type, length] = bone.split('@');
            const generator = () => this.genSkeleton(type);

            // Generate a length array based upon
            // value after @ in the bone string
            return Array.from({ length }).map(generator);
        },

        hasChildTypes (element) {
            return element.indexOf(',') > -1;
        },

        hasMultiple (element) {
            return element.indexOf('@') > -1;
        },

        genSkeleton (nextType) {
            let children = [];
            const type = nextType || this.skeletonType || '';
            const bone = this.rootTypes[type] || '';

            console.log(`type = ${type}`);
            console.log(`bone = ${bone}`);

            // eslint-disable-next-line no-empty
            if (type === bone) {} else if (this.hasMultiple(type)) {
                return this.genBones(type);
            } else if (this.hasMultiple(bone)) {
                children = this.genBones(bone);
            } else if (bone) children.push(this.genSkeleton(bone));



            return [this.genBone(type, children)];
        },

        generateTemplate () {
            const template = this.genSkeleton();
            console.log(template);
            return template;
        }
    },
    render (createElement) {
        return createElement(
            'div', {
                staticClass: this.$style['c-skeleton-loader'],
                attrs: this.attrs
            },
            [this.generateTemplate()]
        );
    }

};
</script>

<style lang="scss" module>

$skeleton-loader-heading-height: spacing(x4);
$skeleton-loader-text-height: spacing(x2);

.c-skeleton-loader {
  position: relative;
  vertical-align: top;
}

.c-skeleton-loader-bone {
    border-radius: inherit;
    overflow: hidden;
    position: relative;
    background-color: $grey--mid;
}
.c-skeleton-loader-bone::after {
    background: linear-gradient(90deg,hsla(0,0%,100%,0),hsla(0,0%,100%,.3),hsla(0,0%,100%,0));
    animation: loading 1.5s infinite;
    content: '';
    height: 100%;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
    transform: translateX(-100%);
    z-index: 1
}

.c-skeleton-loader-heading {
    height: $skeleton-loader-heading-height;
    width: 45%;
}

.c-skeleton-loader-text {
    flex: 1 0 auto;
    height: $skeleton-loader-text-height;
    margin-bottom: spacing();
}

@keyframes loading {
  100% {  transform: translateX(100%) }
}
</style>
