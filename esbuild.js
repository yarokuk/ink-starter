require('esbuild')
  .build({
    entryPoints: ['src/index.tsx'],
    platform: 'node',
    target: ['node14'],
    bundle: true,
    external: ['./node_modules/*'],
    outdir: 'dist',
    tsconfig: 'tsconfig.build.json',
    format: 'cjs',
    charset: 'utf8',
    minify: true,
    sourcemap: true,
    banner: {
      js: '"use strict"; process.env.NODE_ENV = "production";',
    },
  })
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
